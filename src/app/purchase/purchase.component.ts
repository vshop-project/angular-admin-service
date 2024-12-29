import { Component, OnInit } from '@angular/core';
import { AppService,promotionDetails, LoginText, purchaseDetails } from '../service/http-client.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  promoreturndet:string[];
  promoDet:promotionDetails [];
  // promoDet: promotionDetails = new promotionDetails(0,"","","","",0,"",0,0,"");
 

  radioSelectedString:string;
  radioSelected:string;
  credentials: LoginText = new LoginText("","","purchase");
  purchaseDet: purchaseDetails = new purchaseDetails("","","",0,"","");

  

  constructor(
    public httpClientService:AppService,private activatedrot:ActivatedRoute,public router: Router
  ) { }

  ngOnInit(): void {
    const idd =this.activatedrot.snapshot.paramMap.get("id");
    this.httpClientService.getPromoDetails(JSON.parse(this.activatedrot.snapshot.paramMap.get("idd") || '{}')).subscribe(
      response =>this.handleSuccessfulResponse(response),
     ); 

  }

  handleSuccessfulResponse(response)
{
  console.debug(response);
    this.promoDet=response;
}

purchasePromo(): void {

  const LoggedIn =  localStorage.getItem("isLoggedIn");
  const user =  localStorage.getItem("username");
  // alert(" User logged :"+user + LoggedIn)

  if (LoggedIn==="true") {

    this.getSelecteditem()
    this.httpClientService.purchase(this.purchaseDet)
    .subscribe( data => {
     alert("Purchase request submitted");
      this.router.navigate(['']);
    });
    
  } else {
  
    // sessionStorage.setItem("shoprgid",this.activatedrot.snapshot.paramMap.get("id"));
    sessionStorage.setItem("shoprgid",JSON.parse(this.activatedrot.snapshot.paramMap.get("id") || '{}'));

     this.router.navigate(['/login']);
     
  }
 
};

cancelPromo():void {
  this.router.navigate(['']);
}


getSelecteditem(){
  this.radioSelectedString = JSON.stringify(this.radioSelected);
  alert(this.radioSelectedString)
  
  var proid = this.radioSelectedString;
  this.purchaseDet.promoid = proid;

  this.purchaseDet.custid = JSON.parse(localStorage.getItem("username") || '{}');
  
  this.purchaseDet.shopregid = JSON.parse(this.activatedrot.snapshot.paramMap.get("id") || '{}');

}

// onItemChange(item){
//   alert(this.getSelecteditem());
// }

}
