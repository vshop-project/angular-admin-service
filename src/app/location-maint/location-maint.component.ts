import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, LocationDetails } from '../service/http-client.service';


@Component({
  selector: 'app-location-maint',
  templateUrl: './location-maint.component.html',
  styleUrls: ['./location-maint.component.css']
})
export class LocationMaintComponent implements OnInit {

  selectedCountry="";
  selectedState="";
  locDetails: LocationDetails = new LocationDetails("","","","","","");

  countryList: Array<any> = [
    { name: 'India', cities: ['Andhra Pradesh','Asom (Assam)', 'Bihar','Karnataka','Kerala',' Chhattisgarh','Uttar Pradesh',' Goa',' Gujarat','Haryana','Himachal Pradesh',' Jammu and Kashmir',' Tamil Nadu'] },
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona','Alicante','Valencia','Málaga'] },
    { name: 'USA', cities: ['Downers Grove','California','Washington'] },
    { name: 'Mexico', cities: ['Puebla','Jalisco','Guerrero','Yucatan'] },
    { name: 'China', cities: ['Beijing','Sichuan','Shandong'] },
  ];


  constructor(public httpclientService: AppService, 
    public router: Router) { }
  ngOnInit(): void {
  }

  LocationMaint(): void {
   this.locDetails.country=this.selectedCountry;
   this.locDetails.state=this.selectedState;

   let flag=false;
   if(this.locDetails.country==""){
     alert("Please Enter Country")
flag=true;
     
   }
   else if(this.locDetails.state==""){
    alert("Please Enter State")
flag=true;
    
  }
  else if(this.locDetails.district==""){
    alert("Please Enter District")
flag=true;
    
  }
  else if(this.locDetails.location==""){
    alert("Please Enter Location Name")
flag=true;
    
  }
  else if(this.locDetails.pincode==""){
    alert("Please Enter Pincode")
flag=true;
    
  }
  else if(flag==false){
    this.httpclientService.maintLocation(this.locDetails)
    .subscribe( (data: any) => {
     this.router.navigate([''])
         });
        }
        else{
          flag=true;
        }
      };

      cities: Array<any> = [];
      changeCountry(count: any) {
        this.cities = this.countryList.find((con: any) => con.name == count.target.value).cities;
        this.selectedCountry= count.target.value;
       
      }

      onState(event: any){
this.selectedState=event.target.value;

      }

}

