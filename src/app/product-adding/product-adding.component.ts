import { Component, OnInit } from '@angular/core';
import { AppService, ProductAdding } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-adding',
  templateUrl: './product-adding.component.html',
  styleUrls: ['./product-adding.component.css']
})
export class ProductAddingComponent implements OnInit {
  product: { name: string, gst: string ,HsnCode:Number}[] = [
    { name: 'CARROT', gst: '5 %', HsnCode: 454 },{ name: 'PUMKIN', gst: '5 %',HsnCode:7099300.0 },{ name: 'REDCHILLI', gst: '5 %',HsnCode: 256},
    { name: 'TOMATTO', gst: '5 %',HsnCode: 454}, { name: 'ONION', gst: '5 %',HsnCode:455 },{ name: 'COFFEE POWER', gst: '5 %',HsnCode: 456},
    { name: 'LEMON(BIG)', gst: '5 %',HsnCode: 457},{ name: 'KIVI', gst: '5 %',HsnCode: 457},{ name: 'GARLIC', gst: '5 %',HsnCode: 458},
    { name: 'BANANA', gst: '5 %',HsnCode: 459},{ name: 'BRUCOLI', gst: '5 %',HsnCode: 460},{ name: 'APPLE', gst: '5 %',HsnCode: 461},
    { name: 'AVACADO', gst: '5 %',HsnCode: 462},{ name: 'BEENS', gst: '5 %',HsnCode: 486},{ name: 'GREENAPPLE', gst: '5 %',HsnCode: 439},
    { name: 'POTTATO', gst: '5 %',HsnCode: 440},{ name: 'GOVA', gst: '5 %',HsnCode: 454},{ name: 'EGGBROWN', gst: '5 %',HsnCode: 454}, 
    { name: 'EGGWHITE', gst: '5 %',HsnCode: 454},{ name: 'PINEAPPLE', gst: '5 %',HsnCode: 454},{ name: 'GRAPES', gst: '5 %',HsnCode: 454},
    { name: 'PEACH', gst: '5 %',HsnCode: 454},{ name: 'CAPSICUM', gst: '5 %',HsnCode: 454},{ name: 'EGGPLANT(ROUND)', gst: '5 %',HsnCode: 454},
     ];
  unitType: any = ['Kilogram','Gram','Piece']
  categoryList: any = ['Vegetables','Nonveg','Fruits','Sweets','Dryfruits','Nuts','Others']
  selectedUnitType: string = '';
  selectedProd: string = '';
  selectedcategory:string='';
  selectedStatus:string='';
  gst: any;
  hsn: any;

  ProductsAd: ProductAdding= new ProductAdding("","","");

  constructor(public httpclientService: AppService,
    public router: Router,) { }

  ngOnInit(): void {
  }


  prodChangeHandler (event: any) {
    //update the ui
   this.selectedProd = event.target.value;
   this.ProductsAd.productName=this.selectedProd;
   const selectedLocation = this.product.find(location => location.name === this.selectedProd);
   this.gst=selectedLocation?.gst;
   this.hsn=selectedLocation?.HsnCode;
   this.ProductsAd.Gst=this.gst;
   this.ProductsAd.HsnCode=this.hsn;

  }

  productsAdding(){

    this.httpclientService.addProducts(this.ProductsAd).subscribe(data=>{
      if(data==null){
        alert("Error:please try again");
      }
      else{
        alert("Product added successfully");
      }

    });
  }
  cancel(){
    this.router.navigateByUrl('/displayShops')
  }

}

