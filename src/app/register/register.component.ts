import { Component, OnInit } from '@angular/core';
import { RegisterDetails , AppService, RoleDetail } from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { AuthGuard } from '../auth.guard';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  custDetails: RegisterDetails = new RegisterDetails("","","","","","","");
  roles: RoleDetail = new RoleDetail("");
  roleDet: RoleDetail = new RoleDetail("");

  constructor(public httpclientService: AppService, private activatedrot:ActivatedRoute,
    public router: Router, private AuthService:AuthGuard) {

      this.custDetails.role=(JSON.parse(this.activatedrot.snapshot.paramMap.get("roleId") || '{}'))
     }

  ngOnInit(): void {

    this.roleDet.roleId = JSON.parse(this.activatedrot.snapshot.paramMap.get("roleId") || '{}');
    
  }
 
  async CustRegister(): Promise<void> {
    let flag=false;
    let emailValidRegex = new RegExp("[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}","i");
    let mobileValidRegex = new RegExp("^((\\+91-?)|0)?[0-9]{10}$","i");

    if(this.custDetails.fullname==""){
      alert("Please Enter fullname")
 flag=true;
      
    }
    else if(this.custDetails.email==""){
     alert("Please Enter email")
 flag=true;
     
   }
  else if(this.custDetails.mobile==""){
    alert("Please Enter mobile")
flag=true;
    
  }
  else if(this.custDetails.email!='' && !emailValidRegex.test(this.custDetails.email) ){
    alert("Please enter a valid email")
    flag=true;
  } 
 else if(this.custDetails.mobile!='' && !mobileValidRegex.test(this.custDetails.mobile) ){
  alert("Please enter a valid mobile number")
  flag=true;
  } 
  else if(this.custDetails.password==""){
    alert("Please Enter password")
flag=true;
    
  }

  else if(this.custDetails.retypePassword==""){
    alert("Please Enter password")
flag=true;
    
  }
  else if(this.custDetails.retypePassword!=this.custDetails.password){
    alert("Password and Repeat Password is not matching")
flag=true;
    
  }
  else if(flag==false){

    this.httpclientService.registerCust(this.custDetails)
    .subscribe( data => {
      if(data.status==='3')
      {
        this.router.navigate(['/delivery',this.custDetails.email])
      }
     else if(data.status==='invalid'){
      alert("Registration is Unsucessfull");
     }
     else if(data.status==='exist'){
      alert("It is an alredy registed user id");
       }
       else if(data.status==='1'){
         alert("Registration Successfull");
      this.router.navigate(['/login',data.status])
    }
    else{
      alert("Registration successfull");
      this.router.navigate(['/login',data.status])
    }
         });
        }
        else{
          flag=true;
        }
      };

    
      Cancel(): void {
      this.router.navigateByUrl('/displayShops');
    }
}
