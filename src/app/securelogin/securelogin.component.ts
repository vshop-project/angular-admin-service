import { Component, OnInit } from '@angular/core';

import { AppService, LoginText, RoleDetail } from '../service/http-client.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClientService ,LoginText } from "../service/http-client.service";

@Component({
  templateUrl: './securelogin.component.html',
  styleUrls: ['./securelogin.component.css']
})
export class SecureloginComponent {


  //credentials = {username: '', password: ''};

  credentials: LoginText = new LoginText("","","");

  roleDet: RoleDetail = new RoleDetail("");

  invalidLogin = false
  // roleDetail=this.activatedrot.snapshot.paramMap.get("roleId");
  
  loginres: String;
  log: string | null;

  constructor(public httpclientService: AppService,private activatedrot:ActivatedRoute, 
    public router: Router) { 

      // viewDetails (this.roleDetail) 
      // {
      //   this.router.navigate(["/CustRegister/" ,this.roleDetail]);
      // }


    }
 
 // httpclientService: any;
 ngOnInit(): void {
   
    
  this.roleDet.roleId = JSON.parse(this.activatedrot.snapshot.paramMap.get("roleId") || '{}');


 
}



logn(id:any) {
  
  this.router.navigate(['/login',id])

  }








  login() 
{
  let flag=false;
  if(this.credentials.username==""){
    alert(" Username Required")
flag=true;
    
  }
  else if(this.credentials.password==""){
   alert("Password Required")
flag=true;
   
 }
 else if(flag==false){
  //   this.app.authenticate(this.credentials, () => {
  //       this.router.navigateByUrl('./home.component.html');
  //   });
  //   return false;
  // }
  
  const Usernamepassed = this.credentials.username;
  const saveid = localStorage.getItem("shoprgid");
  this.httpclientService.loginMethod(this.credentials) .subscribe(
    data => 
    {
      const Id=data.status;
    //  localStorage.setItem('Id',Id);

      if (data.status === "Invalid Username/Password")
       {
        alert(data.status);
        this.invalidLogin = true;
        this.credentials.username="";
        this.credentials.password="";
       } 
      else 
      {
          localStorage.setItem('username',Usernamepassed);
          localStorage.setItem('isLoggedIn', "true"); 
          localStorage.setItem('Id',Id);
          this.invalidLogin = false;

        if (data.status ==='1')
           {this.router.navigate(['']);
           localStorage.setItem('isLoggedIn', "true"); 
          }
        else
         {
              if (saveid===null || saveid==='[object Object]') 
               {
                 localStorage.setItem('username',Usernamepassed);
                localStorage.setItem('isLoggedIn', "true");
               this.router.navigate(['']);
               } 
              else 
              {
              //this.router.navigate(['/showPromotion/'+saveid]);
              this.router.navigate(['/checkout']);
              } 
          } 
          if(data.status ==='3')
          {
            //this.router.navigate(['/priorityUpdate']);
            this.router.navigate(['']);
          }
          else if(data.status ==='4')
          {
            this.router.navigate(['']);
          }
//delivery time update for customer
          if(this.roleDet.roleId =="5"){
            this.router.navigate(['/deliveryTimeUpd']);
          }
//////          
      }
      
    },
  
    error => {
      this.invalidLogin = true
             }
  
  );
            }

}
  

  
}






function viewDetails(productId: any) {
  throw new Error('Function not implemented.');
}

function productId(productId: any) {
  throw new Error('Function not implemented.');
}

