import { Component, OnInit } from '@angular/core';
import { AppService, purchaseAllDetDTO, shopRegIdRetri } from '../service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-scheduled-purchase-status-view',
  templateUrl: './scheduled-purchase-status-view.component.html',
  styleUrls: ['./scheduled-purchase-status-view.component.css']
})
export class ScheduledPurchaseStatusViewComponent implements OnInit {

  PurchaseTrnDisplay: string[] = ['Description','Delivery Id','Purchase Count','Contact Number','Fleet Id','Status','Delivery Date','View'];

  shop: shopRegIdRetri = new shopRegIdRetri("","");
  PurchaseProductDet: purchaseAllDetDTO = new purchaseAllDetDTO("","","","","","","","","");
  
  Scheduled="Scheduled";
  purchaseList:any[];
  PurchaseTrnProduct:any;
  shopRegId:string;

  constructor(public httpclientService: AppService, private activatedrot:ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {

    this.shop.shopId= (JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("shopRegId")) || '{}')) 
    this.shop.deliveryType=this.Scheduled;

    this.httpclientService.getScheduledPurchase(this.shop).subscribe(
      response=>this.handleSuccessfulResponse(response),
    );

  }
  handleSuccessfulResponse(response: any) {
    this.purchaseList=response;

    this.PurchaseTrnProduct=new MatTableDataSource(this.purchaseList);
  }


  // reAssign(Delivery_id:any){

  //   this.router.navigate(['/scheduledpurch',Delivery_id]);
    
  // }
  productDisplay(Delivery_id,Status){
    this.shopRegId=this.shop.shopId;
    this.router.navigate(['/scheduledpurch',Delivery_id,Status,this.shopRegId]);
  }

}
