import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService, ScheduledDelivery } from '../service/http-client.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DeliveryTimeSettingComponent } from '../delivery-time-setting/delivery-time-setting.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-scheduled-pending-purchase-display',
  templateUrl: './scheduled-pending-purchase-display.component.html',
  styleUrls: ['./scheduled-pending-purchase-display.component.css']
})
export class ScheduledPendingPurchaseDisplayComponent implements OnInit {

  Delivery_Id:string;
  purchaseList:any[];
  SchpurchaseList:any[];
  PurchaseTrnProduct: any;
  Scheduled:any='Scheduled';
  Status:string;
  PurchaseTrnDisplay: string[] = ['Purchase Id','Total','Address','Pin Code','Items Count','Status','View'];
  ShopId: string;
  destination_Id: any;
  constructor(public httpclientService: AppService, private activatedrot:ActivatedRoute,
    public router: Router,private sheduledDelivery: ScheduledDelivery, private dialog: MatDialog ) { }

@ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {

    this.Delivery_Id= (JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("DelId")) || '{}')) 
    this.Status=(JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("Status")) || '{}'))
    this.ShopId=(JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("ShopId")) || '{}'))

    this.httpclientService.getPendPurchase(this.Delivery_Id).subscribe(
      response=>this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response: any) {
      this.purchaseList=response;
      this.PurchaseTrnProduct=new MatTableDataSource(this.purchaseList);
      this.PurchaseTrnProduct.paginator = this.paginator;
  }
  DeliveryAssing(){
    this.PurchaseTrnProduct.filteredData.forEach(x=>{
      if(x!=null){
        
        this.sheduledDelivery.addToDelivery(x.purchase_id,x.delivery_id,x.fleet_id,x.delivery_status,x.items_count,x.pincode,x.total_amount,x.trn_dte,x.delivery_address);
        console.log(x);
      }
    });
      const dialogRef = this.dialog.open(DeliveryTimeSettingComponent, {
        width: '500px',
        height:'500px',
       
       
  data:{ destination_Id:this.ShopId,
    deliveryType:this.Scheduled
  }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.destination_Id = result;
      });



      //this.router.navigate(['/deliveryUnitDisplay',this.ShopId,this.Scheduled]);


   // this.sheduledDelivery.addToDelivery(this.SchpurchaseList.
//purchase_id,x.delivery_id,x.fleet_id,x.delivery_status,x.items_count,x.pincode,x.total_amt,x.time,x.address)

  }
  productDisplay(purchId:any): void{

    this.router.navigate(['/productDisplay',purchId,this.Scheduled]) 
  }


}
