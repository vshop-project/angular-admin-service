import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DisplayDataComponent } from './display-data/display-data.component';
// HttpClient module for RESTful API
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {MatPaginatorModule} from '@angular/material/paginator';
 import {MatTableModule} from '@angular/material/table';
 import {MatIconModule} from '@angular/material/icon';
 import {MatSortModule} from '@angular/material/sort';
 
 import {ScrollingModule} from '@angular/cdk/scrolling';

import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ShopeCreateComponent } from './shope-create/shope-create.component';
import { SecureloginComponent } from './securelogin/securelogin.component';
import { AppService, ImageService } from './service/http-client.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PackageComponent } from './package/package.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { FilterimagesPipe } from './filterimages.pipe';
import { CartComponent } from './cart/cart.component';
import { FilterlocationPipe } from './filterlocation.pipe';
import { LocationMaintComponent } from './location-maint/location-maint.component';
import { DeliveryRegisterComponent } from './delivery-register/delivery-register.component';
import { DeliveryRetrieveComponent } from './delivery-retrieve/delivery-retrieve.component';
import { DeliveryPriorityUpdateComponent } from './delivery-priority-update/delivery-priority-update.component';
import { NotificationWindowComponent } from './notification-window/notification-window.component';
import { ShopPurchaseNotificationComponent } from './shop-purchase-notification/shop-purchase-notification.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ScheduledPurchaseDisplayComponent } from './scheduled-purchase-display/scheduled-purchase-display.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { DeliveryTimeSettingComponent } from './delivery-time-setting/delivery-time-setting.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DeliveryUnitDisplayComponent } from './delivery-unit-display/delivery-unit-display.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ScheduledPurchaseStatusViewComponent } from './scheduled-purchase-status-view/scheduled-purchase-status-view.component';
import { ScheduledPendingPurchaseDisplayComponent } from './scheduled-pending-purchase-display/scheduled-pending-purchase-display.component';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { ShopDetailsViewComponent } from './shop-details-view/shop-details-view.component';



import {MatRadioModule} from '@angular/material/radio';
import {  MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { ProductAddingComponent } from './product-adding/product-adding.component';
import { WebSocketComponentComponent } from './web-socket-component/web-socket-component.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './keycloak-init';
import { AuthInterceptor } from './auth.interceptor';
import { ExtendedKeycloakService } from './extended-keycloak.service';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
const routes: Routes = [ 
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent,
        DisplayDataComponent,
        ShopeCreateComponent,
        SecureloginComponent,
        HomeComponent,
        RegisterComponent,
        PackageComponent,
        PurchaseComponent,
        FilterimagesPipe,
        CartComponent,
        FilterlocationPipe,
        LocationMaintComponent,
        DeliveryRegisterComponent,
        DeliveryRetrieveComponent,
        DeliveryPriorityUpdateComponent,
        NotificationWindowComponent,
        ShopPurchaseNotificationComponent,
        ProductUpdateComponent,
        ScheduledPurchaseDisplayComponent,
        PopupWindowComponent,
        ProductDisplayComponent,
        DeliveryTimeSettingComponent,
        DeliveryUnitDisplayComponent,
        ScheduledPurchaseStatusViewComponent,
        ScheduledPendingPurchaseDisplayComponent,
        ShopDetailsViewComponent,
        ProductAddingComponent,
        WebSocketComponentComponent,
        PurchaseHistoryComponent,
    ],
    imports: [
        // RouterModule.forRoot(routes),
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatSlideToggleModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatTableModule,
        MatIconModule,
        MatSortModule,
        MatAutocompleteModule,
        ScrollingModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatTreeModule,
        MatListModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatTabsModule,
        MatToolbarModule,
        MatRippleModule,
        MatSelectModule,
        MatTooltipModule,
        MatRadioModule,
        KeycloakAngularModule
    ],
    providers: [AppService, ImageService, FilterimagesPipe, DatePipe,
    
          {
            provide: APP_INITIALIZER,
            useFactory:  (keycloak: KeycloakService, router: Router) => initializeKeycloak(keycloak, router),
            multi: true,
            deps: [KeycloakService]
          }
    ],
    bootstrap: [AppComponent, ScheduledPurchaseDisplayComponent, HomeComponent]
})
export class AppModule { }
