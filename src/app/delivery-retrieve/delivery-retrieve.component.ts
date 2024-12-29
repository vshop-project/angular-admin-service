import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, DeliveryComponents } from '../service/http-client.service';

@Component({
  selector: 'app-delivery-retrieve',
  templateUrl: './delivery-retrieve.component.html',
  styleUrls: ['./delivery-retrieve.component.css']
})
export class DeliveryRetrieveComponent implements OnInit {
  
  transport_type: any = ['Immediate','Scheduled']
  selectedTransportType: string = '';

  deliveryRet: DeliveryComponents = new DeliveryComponents("","","","","","","","","","","","");
  fleetId:any;
  constructor(public httpclientService: AppService, 
    public router: Router) { }

  ngOnInit(): void {
  }
  transportTypeChangeHandler (event: any) {
  
    this.selectedTransportType = event.target.value;
  }
  retrieveDelivery(): void {
   


 //   const Usernamepassed = this.deliveryRet.fleet_id;
 this.fleetId= this.deliveryRet.fleet_id;
    this.httpclientService.retrieveShop(this.fleetId)
        .subscribe( (data: any) => {
         
        
          this.deliveryRet.location_name=data.location_name;
          if(this.deliveryRet.location_name===null)
          {
            alert("Fleet is not valid");
          }
          this.deliveryRet.birthdate=data.birthdate;
          this.deliveryRet.delivery_unit_name=data.delivery_unit_name;
          this.deliveryRet.transport_type=data.transportType;
          // this.deliveryRet.Status=data.status;
          this.deliveryRet.contact_number=data.contact_number;
          this.deliveryRet.owner_name=data.owner_name;
          this.deliveryRet.country=data.country;
          this.deliveryRet.state=data.state;
          this.deliveryRet.district=data.district;
          this.deliveryRet.email=data.email;
          this.deliveryRet.location_idno=data.location_idno;
          // this.router.navigate([''])
             });
          };



  addDelivery(): void {

    this.deliveryRet.transport_type=this.selectedTransportType;
    let flag=false;
    if(this.deliveryRet.fleet_id==""){
      alert("Please Enter Fleet Id")
flag=true;
      
    }
    else if(this.deliveryRet.location_name==""){
      alert("Please Enter Location Name")
flag=true;
      
    }
    else if(this.deliveryRet.country==""){
      alert("Please Enter Country")
flag=true;
      
    }
    else if(this.deliveryRet.state==""){
      alert("Please Enter State")
flag=true;
      
    }
    else if(this.deliveryRet.district==""){
      alert("Please Enter District")
flag=true;
      
    }
    else if(this.deliveryRet.email==""){
      alert("Please Enter Email")
flag=true;
      
    }
    else if(this.deliveryRet.birthdate==""){
      alert("Please Enter Date of Birth")
flag=true;
      
    }
    else if(this.deliveryRet.delivery_unit_name==""){
      alert("Please Enter Delivery Unit Name")
flag=true;
      
    }
    else if(this.deliveryRet.transport_type==null){
      alert("Please Enter Transport Type")
flag=true;
      
    }
    else if(this.deliveryRet.contact_number==""){
      alert("Please Enter Contact Number")
flag=true;
      
    }
    else if(this.deliveryRet.owner_name==""){
      alert("Please Enter Owner Name")
flag=true;
      
    }
    else if(flag==false){
    this.httpclientService.updateDeliveryShop(this.deliveryRet)
        .subscribe( (data: any) => {
          this.router.navigate([''])
             });

            }
            else{
              flag=true;
            }
             
          };

}
