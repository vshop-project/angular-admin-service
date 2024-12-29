import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService, productDetails } from '../service/http-client.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: any = ['Carrot', 'Tomatto', 'Onion', 'Coffee Powder','Lemon(Big)','pumpkin','Redchilli','Kivi','Garlic','Banana','Brucoli','Apple','Avacado','Beens','Greenapple','Potato','Gova','Eggbrown','EggWhite','pineapple','Grapes','Peach','Capsicum','Eggplant(Round)']
  unitType: any = ['Kilogram','Gram','Piece']
  categoryList: any = ['Vegetables','Nonveg','Fruits','Sweets','Dryfruits','Nuts','Others']
  selectedUnitType: string = '';
  selectedProd: string = '';
  selectedcategory:string='';
  userNam: any;

  constructor(public httpclientService: AppService, 
    public router: Router, private dialog: MatDialog) { }
  productDetails: productDetails = new productDetails("","",0,0,0,0,"","","");

  ngOnInit(): void {

    this.userNam = localStorage.getItem("username");
    this.httpclientService.retrieveShopId(this.userNam)
              .subscribe((data:any) => {
                if(data==="")
                {
  
                }
              else
              {
              this.productDetails.shopregid=data.shopRegId;

              }
                   });
          
  }

  prodChangeHandler (event: any) {
    //update the ui
    this.selectedProd = event.target.value;
  }
  unitTypeChangeHandler (event: any) {
    //update the ui
    this.selectedUnitType = event.target.value;
  }

  categoryChangeHandler (event: any) {
    //update the ui
    this.selectedcategory = event.target.value;
  }

  createProduct(): void {

    this.productDetails.prodname = this.selectedProd;
    this.productDetails.unittype = this.selectedUnitType;
    this.productDetails.category = this.selectedcategory;

    let flag=false;
     if(this.productDetails.prodname==""){
     alert("Please Select Product Name")
    flag=true;
 
     }
     else if(this.productDetails.unittype==""){
      alert("Please Select Unit Type")
  flag=true;
      
    }
    else if(this.productDetails.category==""){
      alert("Please Select Category")
  flag=true;
      
    }
    else if(!this.productDetails.unit){
      alert("Please Enter Unit")
  flag=true;
      
    }
    else if(!this.productDetails.price){
      alert("Please Enter Price")
  flag=true;
    }

    else if(!this.productDetails.discount_percentage){
      alert("Please Enter Discount ")
  flag=true;
      
    }
    else if(this.productDetails.shopregid==""){
      alert("Please Enter Shop Registration Id")
  flag=true;
      
    }
    else if(this.productDetails.Availability_Status==""){
      alert("Please Enter Availability_Status")
  flag=true;
      
    }
    else if(flag==false){
    this.httpclientService.createProduct(this.productDetails)
        .subscribe( data => {
        if (data){
          alert(this.selectedProd+" Added Successfully");
          this.product="";
          this.router.navigate(['']);
        }
        else{
          alert("Shop registraion id is not valid");
        }
          
        });
      }
      else{
        flag=true;
      }

      };


  cancelPromo():void {
    this.router.navigate([''])
  }

}
