import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService, DeliveryComponents } from '../service/http-client.service';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-delivery-register',
  templateUrl: './delivery-register.component.html',
  styleUrls: ['./delivery-register.component.css']
})
export class DeliveryRegisterComponent implements OnInit {

//new
// transport_type = [
//     {id:1,transport_type:'Type1 Vehicles'},
//     {id:2,transport_type:'Type2 Vehicles'},

//    ]
transport_type = [
  {id:1,transport_type:'Immediate'},
  {id:2,transport_type:'Scheduled'},

 ]
   signupForm: UntypedFormGroup = new UntypedFormGroup({});
//end
  //[x: string]: any;
 // transport_type: any = ['Type1 Vehicles','Type2 Vehicles']
  selectedTransportType: string = '';
  value=3;
  email:any;
  deliveryDetails: DeliveryComponents = new DeliveryComponents("","","","","","","","","","","","");
  formattedDate: any;
  DateFormat: Date;


  
  constructor(public httpclientService: AppService, private datePipe: DatePipe,
    public router: Router,private activatedrot:ActivatedRoute, private fb: UntypedFormBuilder) { }

  ngOnInit(): void {  

    this.email =(JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("email")) || '{}'))
    this.deliveryDetails.email=this.email;



    this.signupForm = this.fb.group({
      fleet_id:['',[Validators.required]],
      locName: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]],
      delivery_unit_name: ['', [Validators.required]],
      email:['',[Validators.required,Validators.email]],
        birthdate: [new Date(2019,12,1), [Validators.required]],
        transport_type:[4,[Validators.required]],
        contact_number:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]],
        owner_name: ['', [Validators.required]],
      
       
       
       
       
    }, {

  })
}

  //new started
 // hide = true;  
 // submitted = false;
  signUpSubmitted = false;
  // loginForm = this.fb.group({
  //   email:['',[Validators.required,Validators.email]],
  //   password:['',[Validators.required,Validators.maxLength(8)]],
 
  // })
 
 
  
  
   get signUpControl() {
     
    return  this.signupForm.controls
   }


//end



  transportTypeChangeHandler (event: any) {
  
    this.selectedTransportType = event.target.value;
  }

  addDelivery(signupForm): void {

  this.signUpSubmitted=true
  this.DateFormat = new Date(this.deliveryDetails.birthdate);
  const datePipe = new DatePipe('en-US');
  const currentDate= datePipe.transform(this.DateFormat, 'medium');
  const vvvv= datePipe.transform(this.DateFormat, 'medium');
  this.formattedDate=this.datePipe.transform(vvvv,'dd-MM-yyyy');

  this.deliveryDetails.birthdate=this.formattedDate;
  this.deliveryDetails.transport_type

 if(this.signupForm.valid){
    let flag=false;
    if(this.deliveryDetails.transport_type==""){
       alert("Please Enter Delivery Unit Type")
flag=true;
      
    }
//     else if(this.deliveryDetails.location_name==""){
//       alert("Please Enter Location Name")
// flag=true;
      
//     }
//     else if(this.deliveryDetails.country==""){
//       alert("Please Enter Country")
// flag=true;
      
//     }
//     else if(this.deliveryDetails.state==""){
//       alert("Please Enter State")
// flag=true;
      
//     }
//     else if(this.deliveryDetails.district==""){
//       alert("Please Enter District")
// flag=true;
      
//     }
//     else if(this.deliveryDetails.email==""){
//       alert("Please Enter Email")
// flag=true;
      
//     }
//     else if(this.deliveryDetails.birthdate==""){
//       alert("Please Enter Date of Birth")
// flag=true;
      
//     }
//     else if(this.deliveryDetails.delivery_unit_name==""){
//       alert("Please Enter Delivery Unit Name")
// flag=true;
      
//     }
//     else if(this.deliveryDetails.transport_type==""){
//       alert("Please Enter Transport Type")
// flag=true;
      
//     }
//     else if(this.deliveryDetails.contact_number==""){
//       alert("Please Enter Contact Number")
// flag=true;
      
//     }
//     else if(this.deliveryDetails.owner_name==""){
//       alert("Please Enter Owner Name")
// flag=true;
      
//     }
    else if(flag==false){
this.httpclientService.deliveryShop(this.deliveryDetails)
    .subscribe( (data: any) => {
      this.router.navigate(['/login',this.value])
         });

        }
        else{
          flag=true;
        }
      };

    }
   


}
function transportTypeChangeHandler(event: Event | undefined, any: any) {
  throw new Error('Function not implemented.');
}

