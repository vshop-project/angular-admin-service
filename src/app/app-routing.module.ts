import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component'
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DeliveryPriorityUpdateComponent } from './delivery-priority-update/delivery-priority-update.component';
import { DeliveryRegisterComponent } from './delivery-register/delivery-register.component';
import { DeliveryRetrieveComponent } from './delivery-retrieve/delivery-retrieve.component';
import { DeliveryTimeSettingComponent } from './delivery-time-setting/delivery-time-setting.component';
import { DeliveryUnitDisplayComponent } from './delivery-unit-display/delivery-unit-display.component';
import { HomeComponent } from './home/home.component';
import { LocationMaintComponent } from './location-maint/location-maint.component';
import { NotificationWindowComponent } from './notification-window/notification-window.component';
import { PackageComponent } from './package/package.component';
import { ProductAddingComponent } from './product-adding/product-adding.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { RegisterComponent } from './register/register.component';
import { ScheduledPendingPurchaseDisplayComponent } from './scheduled-pending-purchase-display/scheduled-pending-purchase-display.component';
import { ScheduledPurchaseDisplayComponent } from './scheduled-purchase-display/scheduled-purchase-display.component';
import { ScheduledPurchaseStatusViewComponent } from './scheduled-purchase-status-view/scheduled-purchase-status-view.component';
import { SecureloginComponent } from './securelogin/securelogin.component';
import { ShopDetailsViewComponent } from './shop-details-view/shop-details-view.component';
import { ShopPurchaseNotificationComponent } from './shop-purchase-notification/shop-purchase-notification.component';
import { ShopeCreateComponent } from './shope-create/shope-create.component';
import { WebSocketComponentComponent } from './web-socket-component/web-socket-component.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';

const routes: Routes = [{path:'',component:DisplayDataComponent },
{ path: 'login/:roleId', component: SecureloginComponent},
 { path: 'home', component: HomeComponent}, 
{ path: 'Shops', component: ShopeCreateComponent},
{ path: 'CustRegister/:roleId', component: RegisterComponent},
{ path: 'CreatePackage', component: PackageComponent},
{ path: 'showPromotion/:id', component: PurchaseComponent},
{ path: 'cart', component: CartComponent },
{ path: 'displayShops', component: DisplayDataComponent },
{ path: 'maintLocation', component: LocationMaintComponent },
{ path: 'delivery/:email', component: DeliveryRegisterComponent },
{ path: 'deliveryRetrive', component: DeliveryRetrieveComponent},
{ path: 'priorityUpdate', component: DeliveryPriorityUpdateComponent},
{ path: 'notification/:id', component: NotificationWindowComponent},
{ path: 'shopPurchase/:shopRegId', component: ShopPurchaseNotificationComponent},
{ path: 'productUpdate', component: ProductUpdateComponent},
{ path: 'scheduledPurchase/:shopRegId', component: ScheduledPurchaseDisplayComponent},
{ path: 'productDisplay/:purchId/:deliveryType',component:ProductDisplayComponent},
{ path: 'deliveryTime',component:DeliveryTimeSettingComponent},
{path:'deliveryUnitDisplay/:Id/:deliveryType',component:DeliveryUnitDisplayComponent},
{path:'scheduledPendingPurchase/:shopRegId',component:ScheduledPurchaseStatusViewComponent},
{path:'scheduledpurch/:DelId/:Status/:ShopId',component:ScheduledPendingPurchaseDisplayComponent},
{path:'shopDetView/:shopRegId',component:ShopDetailsViewComponent}  ,
{path:'productAdd',component:ProductAddingComponent}  ,
{path:'web',component:WebSocketComponentComponent} ,
{path:'purchHist/:shopRegId',component:PurchaseHistoryComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
