import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogData } from '../package/package.component';
import { AppService, UpdateStatus, purchaseAllDetDTO, shopRegIdRetri } from '../service/http-client.service';

@Component({
  selector: 'app-shop-purchase-notification',
  templateUrl: './shop-purchase-notification.component.html',
  styleUrls: ['./shop-purchase-notification.component.css']
})
export class ShopPurchaseNotificationComponent implements OnInit {
  shopId: any;

   shop: shopRegIdRetri = new shopRegIdRetri("","");
  PurchaseProductDet: purchaseAllDetDTO = new purchaseAllDetDTO("","","","","","","","","");
  PurchaseStatusUpdate: UpdateStatus=new UpdateStatus("","");

  PurchaseProduct:any;
  PurchaseTrnProduct:any;
  purchaseList: any[];
  purchaseTrnLists: any[];

  Immediate:any='Immediate';
  Rej='REJ';
  isButtonVisible: any;

  displayedColumns: string[] = [ 'ProductName', 'unit', 'symbol','quantity','Total','Customer Id','Purchase Id'];
 

 displayColumn: string[] = ['Total','GST' ,'Discount' ,'Delivery' , 'NetPlayable'];

 PurchaseTrnDisplay: string[] = ['Purchase Id','Total','Address','Pin Code','Items Count','Fleet_Id','Delivery Assigned Time','Status','Products'];



  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public httpclientService: AppService, private activatedrot:ActivatedRoute,
    public router: Router ) { 

    }

  ngOnInit(): void {
    this.shop.shopId= (JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("shopRegId")) || '{}')) 
    //this.shop.shopId=this.shopId;
    this.shop.deliveryType=this.Immediate
    this.httpclientService.retrieveShopPurchaseDet(this.shop)
    .subscribe(
      response =>this.handleSuccessfulResponse(response),
     );

  }
    handleSuccessfulResponse(response)
    {
      console.debug(response);
      console.debug(response);
      this.PurchaseProductDet=response;
      this.purchaseList=response.purchaseDetailsList;
      this.purchaseTrnLists=response.purchaseTrnList
      this.PurchaseTrnProduct=new MatTableDataSource(this.purchaseTrnLists);
      this.PurchaseTrnProduct.paginator = this.paginator;

      //delivery_status
    }

    TableHide(): void{
      this.isButtonVisible=true ;  
      
    }

    productDisplay(purchId:any): void{

      this.router.navigate(['/productDisplay',purchId,this.Immediate]) 
    }


    onReject(value: any): void {
      this.PurchaseStatusUpdate.Delivery_id=value;
      this.PurchaseStatusUpdate.Status=this.Rej;
      this.httpclientService.statusUpdate(this.PurchaseStatusUpdate)
      
      .subscribe(
        response =>this.handleSuccessfulResponse2(response),
       );
      
      // this.dialogRef.close();
    }
    handleSuccessfulResponse2(response)
    {
      console.debug(response);
    }

}
