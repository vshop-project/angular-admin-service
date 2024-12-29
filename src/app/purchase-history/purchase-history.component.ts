import { Component } from '@angular/core';
import { AppService, purchaseAllDetDTO, ShopComponents } from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent {

  shopId
  PurchaseTrnDisplay: string[] = ['Description','Delivery Id','Items Count','Delivery Address','Total','Purchase Date'];
 // PurchaseProductDet: purchaseAllDetDTO = new purchaseAllDetDTO("","","","","","","","","");
  PurchaseTrnProduct:any;
  purchaseList:any[];
constructor(public httpclientService: AppService, private activatedrot:ActivatedRoute,
    public router: Router){
  this.shopId= (JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("shopRegId")) || '{}')) 
}

  ngOnInit(): void {
    this.httpclientService.getAllPurchase(this.shopId).subscribe(
      response=>this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response): void {
    this.purchaseList=response;

    this.PurchaseTrnProduct=new MatTableDataSource(this.purchaseList);
  }
}
