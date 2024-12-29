import { Component, OnInit } from '@angular/core';
import { AppService, ShopComponents } from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-details-view',
  templateUrl: './shop-details-view.component.html',
  styleUrls: ['./shop-details-view.component.css']
})
export class ShopDetailsViewComponent implements OnInit {

  shopId:any
  purchaseList: any[];
  shopList: any[];
  ShopName:String;
  ShopLoc:String;
  address:String;
  constructor( public httpClientService:AppService ,public router: Router,private activatedrot:ActivatedRoute,) { }

  ngOnInit(): void {
    this.shopId= (JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("shopRegId")) || '{}')) 

    this.httpClientService.getProdutsDetails(this.shopId).subscribe(
      response=>this.handleSuccessfullResponse(response)
    );

    this.httpClientService.getShopDetails(this.shopId).subscribe(
      response=>this.handleSuccessfullResponse1(response)
    );
  }
  handleSuccessfullResponse1(response:any): void {
    this.ShopName=response.shopName;
    this.ShopLoc=response.shopLoc
    this.address=response.address
  }
  handleSuccessfullResponse(response: any) {
    this.purchaseList=response;
  }

}
