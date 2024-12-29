import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService, Scheduled, ScheduledDelivery } from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { KafkaService } from '../kafka.service';

@Component({
  selector: 'app-delivery-unit-display',
  templateUrl: './delivery-unit-display.component.html',
  styleUrls: ['./delivery-unit-display.component.css']
})
export class DeliveryUnitDisplayComponent implements OnInit {
  delivery_unit_type: any;
  purchId: any;
  Id: any;
  ShopId: any;
  productDet: any[];
  Scheduleditems:any[];
  ScheduledDelDate:any;
  PurchaseTrnProduct:any;
  delDateTime:any;
  DelId:any;
  date:any;

  Fleet_det:Scheduled =new Scheduled("","","","","");


  constructor(public httpclientService: AppService, private activatedrot:ActivatedRoute,private kafkaService: KafkaService,
    public router: Router,private sheduledDelivery: ScheduledDelivery) {
    
    this.Id= (JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("Id")) || '{}'))
    this.delivery_unit_type= (JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("deliveryType")) || '{}'))

   }
   displayedColumnss: string[] = [ 'NAME','FLEET ID','CONTACT NUMBER','TRANSPORT TYPE','EMAIL','STATUS','ASSIGN'];
   @ViewChild(MatPaginator) paginator: MatPaginator;
   
  ngOnInit(): void {

    this.Scheduleditems = this.sheduledDelivery.getScheduledItems();
    this.ScheduledDelDate=this.sheduledDelivery.getDeliveryTime();

    this.delDateTime=new MatTableDataSource(this.ScheduledDelDate);



    this.httpclientService.getDeliveryDet(this.delivery_unit_type)
    .subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
    
  }
  handleSuccessfulResponse(response) {
    console.log(response);
    this.productDet=response;
    //this.deliveryType= this.productDet;
    this.PurchaseTrnProduct=new MatTableDataSource(this.productDet);
    this.PurchaseTrnProduct.paginator = this.paginator;
  }

  deliveryAssign(fleet_id:any){

    this.delDateTime.filteredData.forEach(x=>{
      if(x!=null){
        this.Fleet_det.DeliveryTime=x.DeliveryTime
        this.Fleet_det.DeliveryDate=x.DeliveryDate
      }
    });

    this.Fleet_det.Fleet_id=fleet_id
    this.Fleet_det.DeliveryId=this.Id
    this.httpclientService.deliveryAssigning(this.Fleet_det)
    .subscribe( data => {
      if(data){
      alert("The Purchase is assigned to a delivery unit")

      ////////////////// kafka value saving for delivery unit
      const message = {
        TopicName:fleet_id,
        Type:this.delivery_unit_type,
        Value: 'True'
        };
        this.kafkaService.KafkaValueSave(message);
  ////////////////////////////////////////////////////////////////

      this.sheduledDelivery.clearScheduled();
      this.router.navigate(['/displayShops'])
      }
      else{
        alert("Error: try angain later")
      }
      //  this.router.navigate(['/deliveryUnitDisplay',this.purchId,this.delivery_unit_type]);
    });
  }

  ScheduledDeliveryAssign(fleet_id:any){

    this.Fleet_det.DeliveryId=this.Scheduleditems[0].DeliveryId;
    const myDate:Date  = new Date()

    this.Fleet_det.Fleet_id=fleet_id;
    this.Fleet_det.ShopId=this.Id;

    this.delDateTime.filteredData.forEach(x=>{
      if(x!=null){
        this.Fleet_det.DeliveryTime=x.DeliveryTime
        this.Fleet_det.DeliveryDate=x.DeliveryDate
        //this.Fleet_det.DeliveryDate=this.formatDate(x.DeliveryDate)
    //    const Date= this.datePipe.transform(x.DeliveryTime,'yyyy-MM-dd')
        //this.Fleet_det.DeliveryDate:string= Date
      }
      this.Scheduleditems=this.Scheduleditems.concat(this.Fleet_det);
    });



   // this.Scheduleditems=this.Scheduleditems.concat(this.ScheduledDelDate)
   this.httpclientService.ScheduledDeliveryAssigning(this.Scheduleditems)
    .subscribe( data => {
      if(data){
      alert("The Purchase is assigned to a delivery unit")

      ////////////////// kafka value saving for delivery unit
      const message = {
        TopicName:"DeliveryUnit",
        Id:fleet_id,
        Type:this.delivery_unit_type,
        };
        this.kafkaService.KafkaValueSave(message);
  ////////////////////////////////////////////////////////////////

      this.router.navigate(['/displayShops'])
      }
      else{
        alert("Error: try angain later")
      }
      //  this.router.navigate(['/deliveryUnitDisplay',this.purchId,this.delivery_unit_type]);
    });
  }
  private formatDate(DeliveryDate:Date):string{
    return DeliveryDate.toISOString().split('T')[0];
  }

}
