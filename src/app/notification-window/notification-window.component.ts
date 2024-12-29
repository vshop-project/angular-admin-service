import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogData } from '../delivery-priority-update/delivery-priority-update.component';
import { AppService, DeliveryNotificationDetails, PriorityComponents, purchaseAllDetDTO, PurchaseStatusDetailsDTO, UpdateStatus } from '../service/http-client.service';

@Component({
  selector: 'app-notification-window',
  templateUrl: './notification-window.component.html',
  styleUrls: ['./notification-window.component.css']
})
export class NotificationWindowComponent implements OnInit {


  displayedColumnss: string[] = [ 'Purchase Id', 'Delivery Id', 'Fleet Id','Shop Registration Id','Location Id','Street','Pincode','Delivery Charges','City','Delivery Address','Delivery Status','Satus'];
  displayedPurchase: string[] = [ 'Purchase Id', 'Delivery Address', 'Product Count','View Products '];
  notificationStatus: PriorityComponents = new PriorityComponents("","","","","");
  notifWInd: DeliveryNotificationDetails = new DeliveryNotificationDetails("","","","","","","","","","");

  notfiRet: DeliveryNotificationDetails = new DeliveryNotificationDetails("","","","","","","","","","");

  PurchaseStatusDet: PurchaseStatusDetailsDTO = new PurchaseStatusDetailsDTO("","","","","","","","","","","","");
  PurchaseStatusUpdate: UpdateStatus=new UpdateStatus("","");
  purchaseAll:purchaseAllDetDTO = new purchaseAllDetDTO("","","","","","","","","");

 Status:string;
 fleetId:string;
 delivery_type:string;
 deliveryId:any;
 purchase_count:any;
 deliveryDate: any;
 delivery_time:any;
 shopAddress:any;
  notfiReti: any;
  PurchaseTrnProduct: any;
  PurchaseDeliveryStatus: any;
  PurchaseTrnt: [];
  updStatus: [];
  deliStatus:string;

  Acc='ACC';
  Rej='REJ';
  Comp='COMP';
  id: any;
  constructor(public httpclientService: AppService,private route: ActivatedRoute,
    public router: Router) {
     
      // this.notificationStatus.fleetId=data.fleet_id
      // this.notifWInd.notifType=data.notifType
    //  this.fleetId= data.fleet_id
      
     }

  ngOnInit(): void {
    this.fleetId = this.route.snapshot.params['id'];

    this.httpclientService.retrievePurchaseNotification(this.fleetId)
    .subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }
  handleSuccessfulResponse(response)
    {
      console.debug(response);
      if(response==""){
            alert("You Doesn't have a delivery, please wait for the purchase to come");
            this.router.navigateByUrl("/");
      }
      else
      {
            this.PurchaseTrnProduct=response;
            this.PurchaseStatusDet=response;
            this.PurchaseTrnt=response;

            this.deliveryId=this.PurchaseStatusDet.delivery_id;
            this.PurchaseDeliveryStatus=new MatTableDataSource(this.PurchaseTrnProduct);

            this.PurchaseDeliveryStatus.filteredData.forEach(x=>{
              if(x!=null){
                  this.deliveryId = x.delivery_id
                  this.delivery_type = x.delivery_type
                  this.purchase_count = x.purchase_count 
                  this.deliveryDate = x.delivery_date
                  this.delivery_time = x.delivery_time
                  this.shopAddress = x.shop_address
                  this.Status=x.delivery_status
              }
      
              });

      }
    }

    productDisplay(purchId:any): void{

      this.router.navigate(['/productDisplay',purchId,"abc"]) 
    }
  onAccept(value: any): void {
    // this.Status=value;
    this.PurchaseStatusUpdate.Delivery_id=value;
    this.PurchaseStatusUpdate.Status=this.Acc;
    this.httpclientService.statusUpdate(this.PurchaseStatusUpdate)
    .subscribe(
      response =>this.handleSuccessfulResponse1(response),
     );

    // this.dialogRef.close();
  }
  handleSuccessfulResponse1(response)
  {
    console.debug(response);
    this.router.navigate(['']) 

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
    this.router.navigate(['']) 
  }

  onDone(value: any): void {
  this.PurchaseStatusUpdate.Delivery_id=value;
    this.PurchaseStatusUpdate.Status=this.Comp;
    this.httpclientService.statusUpdate(this.PurchaseStatusUpdate)
    
    .subscribe(
      response =>this.handleSuccessfulResponse3(response),
     );
    
    // this.dialogRef.close();
  }
  handleSuccessfulResponse3(response)
  {
    console.debug(response);
    this.router.navigate(['']) 
  }
}
