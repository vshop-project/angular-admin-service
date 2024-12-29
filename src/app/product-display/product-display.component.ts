import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService, purchaseAllDetDTO } from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DeliveryTimeSettingComponent } from '../delivery-time-setting/delivery-time-setting.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  purchId:any;
  productDet: any[];
  PurchaseTrnProduct:any;
  destination_Id: any;
  deliveryType: any;
  delivery_unit_type: String;
  delivery_status: String;
  
  constructor(public httpclientService: AppService, private activatedrot:ActivatedRoute,
    public router: Router, private dialog: MatDialog ) { }

   displayedColumnss: string[] = [ 'Product Name','Unit','Unit Type','Price','Shop Id','Total Amount'];
   @ViewChild(MatSort) sort: MatSort;
   @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {

    this.purchId= (JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("purchId")) || '{}'))
    this.delivery_unit_type= (JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("deliveryType")) || '{}'))

    this.httpclientService.retrieveProductDet(this.purchId)
    .subscribe(
      response =>this.handleSuccessfulResponse(response),
     );

  }
  handleSuccessfulResponse(response) {
   console.log(response);
   this.productDet=response;
   //this.deliveryType= this.productDet;
   this.PurchaseTrnProduct=new MatTableDataSource(this.productDet);
   this.PurchaseTrnProduct.filteredData.forEach(x=>{
    if(x!=null){
      this.delivery_status=x.deliveryStatus
    }
  });


   this.PurchaseTrnProduct.paginator = this.paginator;
 
  }



  setDeliveryTime(){
    const dialogRef = this.dialog.open(DeliveryTimeSettingComponent, {
      width: '500px',
      height:'500px',
     
     
data:{ destination_Id:this.purchId,
  deliveryType:this.delivery_unit_type
}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.destination_Id = result;
    });
  }
}
