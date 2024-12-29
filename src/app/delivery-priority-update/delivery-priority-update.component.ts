import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService, DeliveryNotificationDetails, PriorityComponents, purchaseAllDetDTO } from '../service/http-client.service';
import { MatDialog }  from '@angular/material/dialog';
import { NotificationWindowComponent } from '../notification-window/notification-window.component';


export interface DialogData {
  fleet_id: string;
  destination_Id:any;
  notifType:any;

}



@Component({
  selector: 'app-delivery-priority-update',
  templateUrl: './delivery-priority-update.component.html',
  styleUrls: ['./delivery-priority-update.component.css'],
  
})
export class DeliveryPriorityUpdateComponent implements OnInit {
  statusRet: PriorityComponents = new PriorityComponents("","","","","");
  notfiRet: DeliveryNotificationDetails = new DeliveryNotificationDetails("","","","","","","","","","");
  
  purchaseAll:purchaseAllDetDTO = new purchaseAllDetDTO("","","","","","","","","");
  status="Y";
  useDefault: any;
mymodel=false;
userNam:any;
notification="";
fleet_id:any;
id:any;

isButtonVisible:any;
  destination_Id: any;

 
  constructor(public httpclientService: AppService, 
    public router: Router
    ) { }

  ngOnInit(): void {
    this.userNam = localStorage.getItem("username");
this.httpclientService.retrieveNotification(this.userNam)
        .subscribe((data:any) => {
          
          this.purchaseAll.fleet_id=data.fleet_id
          if (this.purchaseAll.fleet_id===null)
          {
            this.isButtonVisible=false ; 
          }
          else{
            this.isButtonVisible=true ;  
            this.notification="1";
          }
        
             });
        
           

  }

  retrieveStatus(): void {
    const Statuspassed = this.statusRet.fleetId;
    this.httpclientService.retrieveStatus(this.statusRet)
        .subscribe( (data: any) => {
           this.statusRet.availabilityStatus=data.availabilityStatus;
           if(this.statusRet.availabilityStatus===null)
           {
             alert("Fleet is not valid");
           }
           
          this.statusRet.acceptanceStatus=data.acceptanceStatus;
           this.statusRet.locationName=data.locationName;
           this.statusRet.deliveryName=data.deliveryName;
        
          
             });
          };

    
  updatePriority(): void {
    let flag=false;
    if (this.statusRet.fleetId==""){
      alert("Please Enter Fellet Id")
      flag=true;
    }
    else if (this.statusRet.availabilityStatus==""){
      alert("Please Enter Availibility Status")
      flag=true;
    }
    else if (this.statusRet.acceptanceStatus==""){
      alert("Please Enter Acceptance Status")
      flag=true;
    }
    else if (this.statusRet.availabilityStatus!="Y" && this.statusRet.availabilityStatus!="N"){
      alert("Invalid Availibility Status")
      flag=true;
    }
    else if (this.statusRet.acceptanceStatus!="A" && this.statusRet.acceptanceStatus!="R"){
      alert("Invalid Acceptance Status")
      flag=true;
    }
    else if (flag==false){
    this.httpclientService.statusUpdate(this.statusRet)
        .subscribe( (data: any) => {
          this.router.navigate([''])
             });
            }
            else{
              flag=true; 
            }

          };
          // toggle(): void {
          //   const value="Y";
          //   this.statusRet.acceptanceStatus=value;
          // }

          openDialog(fleet:String): void {
          //  this.dialog.open(NotificationWindowComponent);
      // this.id=this.purchaseAll.fleet_id;
          this.router.navigate(['notification', fleet]); 
// data:{ fleet_id:this.purchaseAll.fleet_id}
//           });
//           dialogRef.afterClosed().subscribe(result => {
//             console.log('The dialog was closed');
//             this.fleet_id = result;
//           });

           }
}
