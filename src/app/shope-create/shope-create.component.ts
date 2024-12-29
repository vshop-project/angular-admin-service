import { Component, OnInit,Input  } from '@angular/core';
import { Router } from '@angular/router';
import { AppService ,ShopComponents } from "../service/http-client.service";
import { KafkaService } from '../kafka.service';

@Component({
  selector: 'app-shope-create',
  templateUrl: './shope-create.component.html',
  styleUrls: ['./shope-create.component.css']
})
export class ShopeCreateComponent implements OnInit {
  countryList: Array<any> = [
    { name: 'India', cities: ['Andhra Pradesh','Asom (Assam)', 'Bihar','Karnataka','Kerala',' Chhattisgarh','Uttar Pradesh',' Goa',' Gujarat','Haryana','Himachal Pradesh',' Jammu and Kashmir',' Tamil Nadu'] },
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona','Alicante','Valencia','Málaga'] },
    { name: 'USA', cities: ['Downers Grove','California','Washington'] },
    { name: 'Mexico', cities: ['Puebla','Jalisco','Guerrero','Yucatan'] },
    { name: 'China', cities: ['Beijing','Sichuan','Shandong'] },
  ];
  selectedCountry='';
  selectedState = '';
  TopicName = '';
  shopDetails: ShopComponents = new ShopComponents("","","","","","","","","","");
  customerId: any;

  constructor(public httpclientService: AppService, private kafkaService: KafkaService,
    public router: Router) { }

  ngOnInit(): void {
    this.customerId = localStorage.getItem("username");
    this.shopDetails.customerId=this.customerId;

      this.httpclientService.retrieveShopId(this.customerId)
            .subscribe((data:any) => {
              if(data==="")
              {

              }
            else{
              this.router.navigate(['/CreatePackage'])
            }
          
        });
  }

  addShop(): void {

    this.shopDetails.state = this.selectedState;
    this.shopDetails.country = this.selectedCountry;
    
   let flag=false;
   if(this.shopDetails.shopRegId==""){
     alert("Please Enter Shop Registration Id")
flag=true;
     
   }
   else if(this.shopDetails.shopName==""){
    alert("Please Enter Company/Bussiness Name")
flag=true;
    
  }
  else if(this.shopDetails.shopLoc==""){
    alert("Please Enter Town")
flag=true;
    
  }
  else if(this.shopDetails.shopType==""){
    alert("Please Enter Shop Type")
flag=true;
    
  }
  else if(this.shopDetails.country==""){
    alert("Please Enter Country")
flag=true;
    
  }
  else  if(this.shopDetails.state==""){
    alert("Please Enter State")
flag=true;
    
  }
  else if(this.shopDetails.district==""){
    alert("Please Enter District")
flag=true;
    
  }
  else if(this.shopDetails.address==""){
    alert("Please Enter Shop Address")
flag=true;
    
  }
  else if(flag==false){

    this.httpclientService.createShop(this.shopDetails)
        .subscribe( data => {
         if(data.status==='1'){
            alert("Registration Sucessfull")

            // kafka topic creation 
            this.TopicName=this.shopDetails.shopRegId;
            
            this.kafkaService.createTopic(this.TopicName).subscribe(
              response => console.log(response),
              error => console.error(error)
            );

          this.router.navigate(['/CreatePackage'])
         }
          else{
        alert("Registration id is not valid")
        }

          });
        }
        else{
          flag=true;
        }

  };

  createPromotion(): void{
    this.router.navigate(['/CreatePackage'])
  }

  // stateChangeHandler (event: any) {
  //   //update the ui
  //   this.selectedstate = event.target.value;
  // }

  // districtChangeHandler (event: any) {
  //   //update the ui
  //   this.selecteddistrict = event.target.value;
  // }


  // countryChangeHandler (event: any) {
  //   //update the ui
  //   this.selectedcountry = event.target.value;
  // }

  cities: Array<any> = [];
  changeCountry(count: any) {
    this.cities = this.countryList.find((con: any) => con.name == count.target.value).cities;
    this.selectedCountry= count.target.value;
   
  }

  onState(event: any){
this.selectedState=event.target.value;

  }


}
