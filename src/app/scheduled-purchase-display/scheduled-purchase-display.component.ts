import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogData } from '../package/package.component';
import { AppService, ScheduledDelivery, purchaseAllDetDTO, shopRegIdRetri } from '../service/http-client.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DeliveryTimeSettingComponent } from '../delivery-time-setting/delivery-time-setting.component';



@Component({
  selector: 'app-scheduled-purchase-display',
  templateUrl: './scheduled-purchase-display.component.html',
  styleUrls: ['./scheduled-purchase-display.component.css'],


})




export class ScheduledPurchaseDisplayComponent implements OnInit {
  displayedCol: string[] = ['position', 'name', 'weight', 'symbol'];
//  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  expanded: {[key: string]: boolean} = {};
  destination_Id: any;
  // rows = ROWS;
  constructor(public httpclientService: AppService,private _liveAnnouncer: LiveAnnouncer, private activatedrot:ActivatedRoute,
    public router: Router ,private sheduledDelivery: ScheduledDelivery,private dialog: MatDialog ) { 

      // this.shopId=data.destination_Id
    }
    // ngAfterViewInit() {
    //   this.dataSource.sort = this.sort;
    // }
  shopId: any;

   shop: shopRegIdRetri = new shopRegIdRetri("","");
  PurchaseProductDet: purchaseAllDetDTO = new purchaseAllDetDTO("","","","","","","","","");
  PurchaseProduct:any;
  PurchaseTrnProduct:any;
  purchaseList: any[];
  purchaseTrnLists: any[];
  purchases: any[]=[];
  Id:any;
  isButtonVisible: any;
  ShowPrd=false;
  Scheduled:any='Scheduled';
  displayedColumnss: string[] = [ 'Product Id','Product Name','unit','Price','Quantity','Total'];
 
  temp: any;
 displayColumn: string[] = ['Total','GST' ,'Discount' ,'Delivery' , 'NetPlayable'];



//PurchaseTrnDisplay: string[] = ['Purchase Id','Total','Address','Pin Code','Items Count','Fleet_Id','Delivery Assigned Time','Status','Products'];
PurchaseTrnDisplay: string[] = ['checked','Purchase Id','Total','Address','Pin Code','Items Count','Fleet_Id','Status','View'];
//selection = new SelectionModel<PeriodicElement>(true, []);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatPaginator) paginator2: MatPaginator;

 
  ngOnInit(): void {
    this.sheduledDelivery.clearScheduled();  

    this.shop.shopId= (JSON.parse(JSON.stringify(this.activatedrot.snapshot.paramMap.get("shopRegId")) || '{}')) 
    //this.shop.shopId=this.shopId;
    this.shop.deliveryType=this.Scheduled
    this.httpclientService.retrieveShopPurchaseDet(this.shop)
    .subscribe(
      response =>this.handleSuccessfulResponse(response),
     );

    //  this.dataSource.sort = this.sort;

    //  const sortState: Sort = {active:'name', direction: 'desc'};
    //  this.sort.active = sortState.active;
    //  this.sort.direction = sortState.direction;
    //  this.sort.sortChange.emit(sortState);




  }
  handleSuccessfulResponse(response)
  {
    console.debug(response);
    console.debug(response);
    this.PurchaseProductDet=response;
   this.purchaseList=response.purchaseDetailsList;
   this.purchaseTrnLists=response.purchaseTrnList

   this.PurchaseTrnProduct=new MatTableDataSource(this.purchaseTrnLists);
  //  this.PurchaseTrnProduct.sort = this.sort;
 this.PurchaseTrnProduct.paginator = this.paginator;

    //   this.PurchaseProduct=new MatTableDataSource(this.purchaseList);
    //   this.PurchaseProduct.sort = this.sort;
    //  this.PurchaseProduct.paginator = this.paginator;

      // this.dataSource.sort = this.sort;
   }

  // TableHide(): void{
  //   this.isButtonVisible=true ;  
    
  // }



  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  // announceSortChanges(sortState: Sort) {
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }
  

  // isRowClickable(rowIndex: number): boolean {
  //   return this.PurchaseProductDet[rowIndex].purchase_id && this.PurchaseProductDet[rowIndex].purchase_id.length > 0
  // }

  productDisplay(purchId:any): void{

    this.router.navigate(['/productDisplay',purchId,this.Scheduled]) 
  }



  print(){
    this.Id=this.shop.shopId;
    this.PurchaseTrnProduct.filteredData.forEach(x=>{
      if(x.checked){
        
        this.sheduledDelivery.addToDelivery(x.purchase_id,x.delivery_id,x.fleet_id,x.delivery_status,x.items_count,x.pincode,x.total_amt,x.time,x.address);
        console.log(x);
      }
    });

    const dialogRef = this.dialog.open(DeliveryTimeSettingComponent, {
      width: '500px',
      height:'500px',
     
     
data:{ destination_Id:this.Id,
  deliveryType:this.Scheduled
}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.destination_Id = result;
    });




   //this.router.navigate(['/deliveryUnitDisplay',this.Id,this.Scheduled]);
  

  }







  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.PurchaseTrnProduct.data.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.selection.clear();
  //     return;
  //   }

  //   this.selection.select(...this.PurchaseTrnProduct.data);
  // }

  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.purchase_id + 1}`;
  // }



}
