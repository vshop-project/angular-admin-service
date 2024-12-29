import { Component, OnInit } from '@angular/core';
import { promotionDetails , AppService, productDetails, shopRegIdRetri } from '../service/http-client.service';
import { Router } from '@angular/router';
import { ShopPurchaseNotificationComponent } from '../shop-purchase-notification/shop-purchase-notification.component';
import { MatDialog } from '@angular/material/dialog';
import { ScheduledPurchaseDisplayComponent } from '../scheduled-purchase-display/scheduled-purchase-display.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



export interface DialogData {
  [x: string]: any;
  destination_Id:any;
  notifType:any;
  deliveryType:any

}

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})


export class PackageComponent implements OnInit {
    
 // product: any = ['Carrot', 'Tomatto', 'Onion', 'Coffee Powder','Lemon(Big)','pumpkin','Redchilli','Kivi','Garlic','Banana','Brucoli','Apple','Avacado','Beens','Greenapple','Potato','Gova','Eggbrown','EggWhite','pineapple','Grapes','Peach','Capsicum','Eggplant(Round)']
  
  product:any[];
  
  // product: { name: string, gst: string }[] = [
  //   { name: 'Carrot', gst: '8%' },{ name: 'pumpkin', gst: '2%' },{ name: 'Redchilli', gst: '10%' },
  //   { name: 'Tomatto', gst: 'District 2' }, { name: 'Onion', gst: 'District 1' },{ name: 'Coffee Powder', gst: 'District 3' },
  //   { name: 'Lemon(Big)', gst: 'District 2' },{ name: 'Kivi', gst: 'District 1' },{ name: 'Garlic', gst: 'District 3' },
  //   // Add more locations as needed
  // ];
  unitType: any = ['Kilogram','Gram','Piece']
  categoryList: any = ['Vegetables','Nonveg','Fruits','Sweets','Dryfruits','Nuts','Others']
  avalbtySts: any = ['Y','N']
  selectedUnitType: string = '';
  selectedProd: string = '';
  selectedcategory:string='';
  selectedStatus:string='';
  userNam: any;
  shopId:any;
  notifi:any;
  gst:any;
  scheduledNotifi:any;
  isButtonVisible: any;
  scheduledPurchaseNoti:any;
  destination_Id: any;
  discount: any;
  productPrice: any;

  Immediate:any='Immediate';
  Scheduled:any='Scheduled';
  isNumber:boolean=true;
  isPrice:boolean=true;
  isDis:boolean=true;
  purchase:any=[];
  constructor(public httpclientService: AppService,
    public router: Router, private dialog: MatDialog) { }

  promoDetails: promotionDetails = new promotionDetails(0,"","","yyyy/mm/dd","yyyy/mm/dd",0,"",0,0,"");
  productDetails: productDetails = new productDetails("","",0,0,0,0,"","","");
  shop: shopRegIdRetri = new shopRegIdRetri("","");

  ngOnInit(): void {

  this.userNam = localStorage.getItem("username");
  this.httpclientService.retrieveShopId(this.userNam)
            .subscribe((data:any) => {
              if(data==="")
              {

              }
            else{
            this.productDetails.shopregid=data.shopRegId;
            this.shopId=this.productDetails.shopregid;
          }
                 });
  this.httpclientService.getProductNames().subscribe
          ((data:any) => {
            this.product=data
          });
  
   }

  createPromo(): void {
    this.httpclientService.createPromotion(this.promoDetails)
        .subscribe( data => {
         
          this.router.navigate(['/CreatePackage'])
        });

      };

      prodChangeHandler (event: any) {
        //update the ui
       this.selectedProd = event.target.value;
       const selectedLocation = this.product.find(location => location.name === this.selectedProd);
       this.gst=selectedLocation?.gst;
      }
      unitTypeChangeHandler (event: any) {
        //update the ui
        this.selectedUnitType = event.target.value;
      }
    
      categoryChangeHandler (event: any) {
        //update the ui
        this.selectedcategory = event.target.value;
      }
      StatusHandler (event: any) {
        //update the ui
       this.selectedStatus = event.target.value;
      }

      price(event:any): void {
        this.productPrice= event.target.value;
        this.discount=this.productDetails.discount_percentage;
         if( this.discount===0){
        this.productDetails.net_amount=this.productPrice;
         }
         else{
          this.discount= (this.discount*this.productPrice)/100;
          this.productDetails.net_amount= this.productPrice- this.discount;
         }
      }
      DiscountCal(event:any): void {
       
        this.discount= event.target.value;
        this.discount= (this.discount*this.productPrice)/100;
        this.productDetails.net_amount= this.productPrice- this.discount;
      }





      createProduct(): void {
      this.isNumber= !isNaN(Number(this.productDetails.unit));
      this.isPrice =!isNaN(Number(this.productDetails.price));
      this.isDis=!isNaN(Number(this.productDetails.discount_percentage));
        let mobileValidRegex = new RegExp("^((\\+91-?)|0)?[0-9]{10}$","i");

        this.productDetails.prodname = this.selectedProd;
        this.productDetails.unittype = this.selectedUnitType;
        this.productDetails.category = this.selectedcategory;
        this.productDetails.availabilitystatus = this.selectedStatus;

        let flag=false;
         if(this.productDetails.prodname===""){
         alert("Please Select Product Name")
        flag=true;
     
         }
         else if(this.productDetails.unittype===""){
          alert("Please Select Unit Type")
      flag=true;
          
        }
        else if(this.productDetails.category===""){
          alert("Please Select Category")
      flag=true;
          
        }
        else if(!this.productDetails.unit){
          alert("Please Enter Unit")
      flag=true;
          
        }
        else if(!this.isNumber){
          alert("The Unit Should be Number")
          flag=true;
        }
        else if(!this.productDetails.price){
          alert("Please Enter Price")
      flag=true;   
          
        }
        else if(!this.isPrice){
          alert("The Price Should be Number")
          flag=true;
        } 
        else if(! this.isDis){
          alert("The Discount Should be Number")
          flag=true;
        }
        else if(this.productDetails.shopregid===""){
          alert("Please Enter Shop Registration Id")
      flag=true;
          
        }
        else if(this.productDetails.availabilitystatus===""){
          alert("Please Enter Availability_Status")
      flag=true;
          
        }
        else if(flag==false){
        this.httpclientService.createProduct(this.productDetails)
            .subscribe( data => {
            if (data){
              alert(this.selectedProd+" Added Successfully");
              this.productDetails.unit=0;
              this.productDetails.price=0;
              this.productDetails.availabilitystatus="";
              // this.productDetails.shopregid=this.shopId;
              this.router.navigate(['/CreatePackage']);
              this.productDetails.shopregid=this.shopId;
            }
            else{
              alert("Shop registraion id is not valid");
            }
              
            });
          }
          else{
            flag=true;
          }
          // this.productDetails.shopregid=this.shopId;
          };
    

      cancelPromo():void {
        this.router.navigate([''])
      }
      openDialog(): void {

          this.router.navigate(['/shopPurchase',this.shopId])
        }

        openScheduled(): void {
 
          this.router.navigate(['/scheduledPurchase',this.shopId])

        }


    ScheduledPend(){
        this.router.navigate(['/scheduledPendingPurchase',this.shopId])

    }   


}
