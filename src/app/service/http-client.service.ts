import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
//import { Kafkas } from 'kafkajs';

export class ProductAdding {
  constructor(
  public productName: string,
  public HsnCode:string,
  public Gst: string,
  ){}
}

export class DeliveryTime {
  constructor(
  public  date:string,
	public  time: string,
  public  purchId: string,

  ){}
} 

export class Kafka {
  constructor(
  public  id:string,
	public  notiStatus: string,
	public  stopNoti: string

  ){}
} 


export class productGet {
  constructor(
  public selectShopId: string,
  public shopName: string,

  ){}
} 
export class DeliveryAddressDetails {
  constructor(
  public fullname: string,
  public email: string,
  public address:string,
  public address2:string,
  public city: string,
  public street: string,
  public state: string,
  public zip: string,
  public cvv: string,
  public deliveryType: string
  // public  deliveryDetails:[]
  ){}
} 

export class RegisterDetails {
  constructor(
  public fullname: string,
  public email: string,
  public cntry:string,
  public mobile: string,
  public password: string,
  public role: string,
  public retypePassword: string
  ){}
} 

export class SelectedLocation {
  constructor(
  public locationName: string,

  ){}
} 

export class ProductWiseSearch {
  constructor(
  public locationName: string,
  public productName: string
  ){}
} 
export class Scheduled {
  constructor(
  public Fleet_id: string,
  public ShopId:string,
  public DeliveryId: string,
  public DeliveryDate: string,
  public DeliveryTime: string,
  ){}
} 




export class RoleDetail {
  constructor(
  public roleId: string,

  ){}
} 




export class promotionDetails {
  // [x: string]: string;
  constructor(
  public promoid:number,
  public description: string,
  public category: string,
  public fromdate: string,
  public todate: string,
  public duration: number,
  public durtype: string,
  public price: number,
  public offerprice: number,
  public shopregid: string
  ){}
} 
export class productDetails{
  [x: string]: any;
  status: string;
  constructor(
  public prodname:string,
  public unittype: string,
  public unit: Number,
  public price: Number,
  public discount_percentage: Number,
  public net_amount: Number,
  public shopregid: string,
  public category:string,
  public availabilitystatus:string
  ){}

}

export class shopRegIdRetri{
  [x: string]: any;
  // status: string;
  constructor(
  public shopId: string,
  public deliveryType: string,
  ){}

}


export class purchaseDetails{
  constructor(
    public promoid:string,
    public shopregid: string,
    public custid: string,
    public price:number,
    public effdate: string,
    public todate: string,


  ){}
}

export class purchaseProdDetails{
  constructor(

    public itemslist: []

  ){}
}


export class ShopComponents {
  
  // [x: string]: string;
  constructor(
  public status: string,
  public shopRegId: string,
  public shopName: string,
  public shopType: string,
  public shopLoc: string,
  public address: string,
  public district:string,
  public state:string,
  public country:string,
  public customerId:string
  ){}
} 

export class DeliveryComponents {
  
  constructor(
  public fleet_id: string,
  public location_name: string,
  public birthdate: string,
  public delivery_unit_name: string,
  public transport_type: string,
  // public Status:string,
  public contact_number:string,
  public owner_name:string,
  public country:string,
  public state:string,
  public district:string,
  public email:string,
  public location_idno:string,

  ){}
} 

export class DeliveryNotificationDetails {
  // userNam: any;
  
  constructor(
  public notifType: string,
  public notifDescription: string,
  public notifDestination: string,
  public destination_Desc: string,
  public destination_Id: string,
  public validFlag:string,
  public crtTs:string,
  public crtBy:string,
  public updTs:string,
  public updBy:string,

  ){}
} 

export class PriorityComponents {
  
  constructor(
  public fleetId: string,
  public availabilityStatus:string,
  public acceptanceStatus:string,
  public locationName:string,
  public deliveryName:string,

  ){}
} 

export class LoginText {
  constructor(
  public username: string,
  public password: string,
  public loginscenario: string,
  ){}
} 

export class LocationDetails {
  constructor(
  public country: string,
  public state: string,
  public district:string,
  public location: string,
  public nearest_town: string,
  public pincode: string,
  // public role: string,
  )
  {}
}
export class purchaseAllDetDTO {
  [x: string]: any;
  constructor(
    public total: String,
  public purchase_id: string,
  public customer_id: string,
  public location_id: string,
  public delivery_status:String,
	public fleet_id:String,
	public delivery_address:String,
  public  delivery_charge:String,
  public  net_payable_amt:String,
  // public  purchaseDetailsList:Object

  ){}
} 
export class purchaseDetailsDTO {
  [x: string]: any;
  constructor(
 
  public  purchaseDetailsList=new purchaseDetailsList(),
  public trn_dte: string,
  public product_id: string,
  public productName: string,
  public unit: string,
  public unitType: string,
  public unitPrice: string,
  public totalUnitPrice: string,
  public totalAmt: string,
  public discount_amt: string,
  public gst_amount: string,
  public shop_reg_id: string,
	public  crt_ts:string,
	public  crt_by:String,
	public  upd_ts:string,
	public  upd_by:String
  

  ){}
}

export class PurchaseStatusDetailsDTO {
  [x: string]: any;
  constructor(
    public total: String,
    public  fleet_id:String,
    public  delivery_address:String,
    public  purchase_id:String,
    public  delivery_id:String,
    public  location_id:String,
    public  shop_reg_id:String,
    public  street:String,
    public  city:String,
    public  pincode:String,
    public  delivery_charges:String,
    public  delivery_status:String

  ){}
} 
export class UpdateStatus {
  constructor(
  public Delivery_id: string,
  public Status: string,

  ){}
} 

export class User{
  constructor(
    public status:string,
     ) {}
     
}


@Injectable({
  providedIn: 'root'
})

export class AppService {
  [x: string]: any;

  authenticated = false;

   // Define API old port is 8080 for the mail project port
   apiURL = 'http://localhost:8081';
  // apiURL = 'http://3.110.156.81:8081';
  apiCustURL = 'http://localhost:8084';
  // apiCustURL = 'http://13.201.69.63:8082';
  apiPurchURL = 'http://localhost:8083';
  apiAdminURL = 'http://localhost:8083';
  // apiPurchURL = 'http://13.126.110.70:8083';

  constructor(private http: HttpClient) {
  }

  keycloaktokenCheck(headers){
      let params=new HttpParams()
      return this.http.get<ShopComponents>(this.apiAdminURL + '/getProducts',{headers:headers,params:params}).pipe(
        map(
          userData =>{
            return userData;
          }
        )
      );

  }
  createKeyclok(){
    let params=new HttpParams()
    return this.http.get<ShopComponents>(this.apiURL + '/test',{params:params}).pipe(
      map(
        userData =>{
          return userData;
        }
      )
    );
  }

  
  getProductNames(){
    let params=new HttpParams()
    return this.http.get<ShopComponents>(this.apiAdminURL + '/getProducts',{params:params}).pipe(
      map(
        userData =>{
          return userData;
        }
      )
    );
  }

  addProducts(ProductsAd){
    let params=new HttpParams()
    .set("productName",ProductsAd.productName)
    .set("HsnCode",ProductsAd.HsnCode)
    .set("Gst",ProductsAd.Gst)
    return this.http.get<ShopComponents>(this.apiAdminURL + '/addProducts',{params:params}).pipe(
      map(
        userData =>{
          return userData;
        }
      )
    );
  }
  
  getShopDetails(shopRegId){

    let params=new HttpParams()
    .set("ShopId",shopRegId)
    return this.http.get<ShopComponents>(this.apiAdminURL + '/GetShopdetails',{params:params}).pipe(
      map(
        userData =>{
          return userData;
        }
      )
    );

  };
  getProdutsDetails(shopRegId){

    let params=new HttpParams()
    .set("ShopId",shopRegId)
    return this.http.get<ShopComponents>(this.apiAdminURL + '/ShopProductsView',{params:params}).pipe(
      map(
        userData =>{
          return userData;
        }
      )
    );

  };

  updDelTime(TimeUpd){
    let params=new HttpParams()
    .set("Dte",TimeUpd.date)
    .set("delId",TimeUpd.purchId)
    .set("time",TimeUpd.time)
    return this.http.get<ShopComponents>(this.apiAdminURL + '/DeliveryTimeUpd',{params:params}).pipe(
      map(
        userData =>{
          return userData;
        }
      )
    );

  };

  getdeliverydate(delId){
    let params = new HttpParams()
    .set("delId",delId) 
    return this.http.get<ShopComponents>(this.apiAdminURL + '/getdeliveryDte_Time',{params:params}).pipe(
      map(
        userData =>{
          return userData;
        }
      )
    );
  };

  // retrieveHeaderStatus(username){

  //   let params = new HttpParams()
  //          .set("userName", username)
  //          return this.http.get<ShopComponents>(this.apiPurchURL + '/RetriveHeaderStatus',{params:params}).pipe(
  //           map(
  //             userData => {
               
  //              return userData;
  //             }
  //           )
       
  //          );
        
  //        };


  getPendPurchase(DelId){

    let params = new HttpParams()
           .set("Delivery_Id", DelId)
           return this.http.get<ShopComponents>(this.apiAdminURL + '/RetrivePendingPurch',{params:params}).pipe(
            map(
              userData => {
               
               return userData;
              }
            )
       
           );
        
         };


  getScheduledPurchase(Shops){

    let params = new HttpParams()
           .set("ShopRegId", Shops.shopId)
           .set("DeliveryType", Shops.deliveryType)
           return this.http.get<ShopComponents>(this.apiAdminURL + '/ScheduledPendPurch',{params:params}).pipe(
            map(
              userData => {
               
               return userData;
              }
            )
       
           );
        
         };
         getAllPurchase(shopId){

          let params = new HttpParams()
                 .set("ShopRegId", shopId)
                 return this.http.get<ShopComponents>(this.apiAdminURL + '/AllPurch',{params:params}).pipe(
                  map(
                    userData => {
                     
                     return userData;
                    }
                  )
             
                 );
              
               };

  getProduct(selectedPro){

    let params = new HttpParams()
           .set("locationName", selectedPro.locationName)
           .set("productName", selectedPro.productName)
           return this.http.get<ShopComponents>(this.apiAdminURL + '/productList',{params:params}).pipe(
            map(
              userData => {
               
               return userData;
              }
            )
       
           );
        
         };



getEmployees(locationid,headers){

  let params = new HttpParams()
  .set("locationId", locationid)
  return this.http.get<ShopComponents>(this.apiAdminURL+'/shopsList', {headers:headers,params:params}).pipe(
    map(
      userData => {
      // sessionStorage.setItem('username',promotionDetails.shopregid);
      if (userData==null){
        alert("No shops preasent in this location")
      }
       return userData;
      }
    )

   );
  

}

maintLocation(LocationDetails) {​​​​​​​​
return this.http.post<LocationDetails>(this.apiAdminURL + '/maintLocation', JSON.stringify(LocationDetails), this.httpOptions)
 
  .pipe(
map(
userData=> {​​​​​​​​

if (userData) {​​​​​​​​
alert("Location added Successfully")
// this.router.navigate([''])
        }​​​​​​​​ else {​​​​​​​​
//  this.router.navigate(['/login'])
alert("This Location exist!, Please try login.")

        }​​​​​​​​  

      }​​​​​​​​
    )
 
   );

}​​​​​​​​
// deliveryShop(employee) {
//   return this.http.post<DeliveryComponents>(this.apiURL + '/deliveryShops', JSON.stringify(employee), this.httpOptions)
 
// }  

deliveryShop(Customer) {
  return this.http.post<DeliveryComponents>(this.apiAdminURL + '/deliveryShops', JSON.stringify(Customer), this.httpOptions)

  .pipe(
    map(
      userData => {
      
        if (userData) {
          alert("Registered Successfully")
       
        } else {
         
          alert("Location id or Fleet Id is not correct!, Please check product details")
          this.router.navigate(['/delivery'])
        }
       
      }
    )

   );
         
} 

updateDeliveryShop(Customer) {
  return this.http.post<DeliveryComponents>(this.apiAdminURL + '/updateDeliveryDet', JSON.stringify(Customer), this.httpOptions)

  .pipe(
    map(
      userData => {
      
        if (userData) {
          alert("Registered Successfully")
       
        } else {
         
          alert("Location id or Fleet Id is not correct!, Please check product details")
          this.router.navigate(['/delivery'])
        }
       
      }
    )

   );
         
} 

deliveryAssigning(Delivery){
  let params = new HttpParams()
         .set("purchId",Delivery.DeliveryId)
         .set("fleet_id",Delivery.Fleet_id)
         .set("delivery_time",Delivery.DeliveryTime)
         .set("delivery_date",Delivery.DeliveryDate)
          
         return this.http.get<ShopComponents>(this.apiAdminURL + '/DeliveryAssign',{params:params}).pipe(
          map(
            userData => {
              
             
             return userData;
            }
          )
     
         );
      
       };
       
  ScheduledDeliveryAssigning(employee) {
      return this.http.post<ShopComponents>(this.apiAdminURL + '/ScheduledDelivey', JSON.stringify(employee), this.httpOptions)
       
      } 


statusUpdate(PurchaseStatusUpdate) {

    let params = new HttpParams()
    .set("Delivery_id", PurchaseStatusUpdate.Delivery_id)
    .set("Status", PurchaseStatusUpdate.Status)
  
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
    return this.http.get<DeliveryComponents>(this.apiAdminURL + '/updateStatus',{params:params}).pipe(
       map(
         userData => {
          if (userData!=null){
            alert("Status Updated Successfully");
          }
          else{
            alert("Status is not Updated ");
          }
          return userData;
         }
       )
  
      );
   
    };

retrieveNotification(userName) {

  let params = new HttpParams()
                .set("userName", userName)

 // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
  return this.http.get<DeliveryComponents>(this.apiAdminURL + '/deliveryNotification',{params:params}).pipe(
     map(
       userData => {
        
        return userData;
       }
     )

    );
 
  };
  retrievePurchaseNotification(fleetId) {

    let params = new HttpParams()
                  .set("fleetId", fleetId)
  
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
    return this.http.get<PurchaseStatusDetailsDTO>(this.apiAdminURL + '/RetrieveStatusDetails',{params:params}).pipe(
       map(
         userData => {
          
          return userData;
         }
       )
  
      );
   
    };
    
  retrieveShopId(userName) {

      let params = new HttpParams()
      .set("userName", userName)

// const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
  return this.http.get<DeliveryComponents>(this.apiAdminURL + '/RetrieveShopId',{params:params}).pipe(
    map(
      userData => {

        return userData;
                  }
        )

    );

  };

//   retrieveShopNotification(deliveryNotification) {

//     let params = new HttpParams()
//     .set("shopId", deliveryNotification.shopId)
//     .set("deliveryType", deliveryNotification.deliveryType)
    
// return this.http.get<DeliveryComponents>(this.apiPurchURL + '/RetrieveShopNotif',{params:params}).pipe(
//   map(
//     userData => {

//       return userData;
//                 }
//       )

//   );

// };


  retrieveDeliveryStatus(userName) {

    let params = new HttpParams()
                  .set("userName", userName)
  
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
    return this.http.get<DeliveryComponents>(this.apiAdminURL + '/PurchaseNotification',{params:params}).pipe(
       map(
         userData => {
          
          return userData;
         }
       )
  
      );
   
    };


    retrievePendingProductDet(userName) {

      let params = new HttpParams()
                    .set("userName", userName)
    
     // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
      return this.http.get<purchaseAllDetDTO>(this.apiCustURL + '/RetrievePurchaseDet',{params:params}).pipe(
         map(
           userData => {
            
            return userData;
           }
         )
    
        );
     
      };

    retrieveShopPurchaseDet(deliveryNotification) {

        let params = new HttpParams()
        .set("shopId", deliveryNotification.shopId)
        .set("deliveryType", deliveryNotification.deliveryType)
      
       // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
        return this.http.get<purchaseAllDetDTO>(this.apiAdminURL + '/RetrieveShopPurchaseDet',{params:params}).pipe(
           map(
             userData => {
              
              return userData;
             }
           )
      
          );
       
        };
 retrieveProductDet(productsDisplay) {

          let params = new HttpParams()
          .set("PurchId", productsDisplay)
           return this.http.get<purchaseDetailsDTO>(this.apiAdminURL + '/RetrieveProductDet',{params:params}).pipe(
             map(
               userData => {
                
                return userData;
               }
             )
        
            );
         
          };

          
  getDeliveryDet(delivery_unit_type) {

            let params = new HttpParams()
            .set("delivery_unit_type", delivery_unit_type)
             return this.http.get<purchaseDetailsDTO>(this.apiAdminURL + '/getDeliveryDet',{params:params}).pipe(
               map(
                 userData => {
                  
                  return userData;
                 }
               )
          
              );
           
            };     
retrieveStatus(statusRet) {

  let params = new HttpParams()
                .set("fleetId", statusRet.fleetId)

 // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
  return this.http.get<DeliveryComponents>(this.apiURL + '/priorityUpdate',{params:params}).pipe(
     map(
       userData => {
        
        return userData;
       }
     )

    );
 
  };


retrieveShop(fleetId) {

  let params = new HttpParams()
                .set("fleetId", fleetId)

 // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
  return this.http.get<DeliveryComponents>(this.apiAdminURL + '/deliveryRetrive',{params:params}).pipe(
     map(
       userData => {
        
        return userData;
       }
     )

    );
 
  };
  

  Scheduler(employee) {
    return this.http.post<ShopComponents>(this.apiAdminURL + '/stopScheduler', JSON.stringify(employee), this.httpOptions)
   
  }  
  
  
  SchedulerStart(employee) {
    return this.http.post<ShopComponents>(this.apiAdminURL + '/startScheduler', JSON.stringify(employee), this.httpOptions)
   
  }  
  


  // KafkaDatabse(employee) {
  //   return this.http.post<ShopComponents>(this.apiKafkaURL + '/kafka', JSON.stringify(employee), this.httpOptions)
   
  // } 
  // KafkaGetValue(employee) {
 
  //   let params = new HttpParams()
  //   .set("values", employee)
  //      return this.http.get<User>(this.apiKafkaURL + '/kafkaGet',{params:params}).pipe(
  //     map(
  //     userData => {

  //     return userData;
  //     }
  //     )

  //     );

  //   }; 

    getLoc(employee) {

      let params = new HttpParams()
                    .set("location", employee)
    
     // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
      return this.http.get<User>(this.apiAdminURL + '/getCacheLoc',{params:params}).pipe(
         map(
           userData => {
            
            return userData;
           }
         )
    
        );
     
      }; 
      getPrdName(employee) {

        let params = new HttpParams()
                      .set("PrdName", employee)
                      
       // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
        return this.http.get<User>(this.apiAdminURL + '/getCachePrd',{params:params}).pipe(
           map(
             userData => {
              
              return userData;
             }
           )
      
          );
       
        }; 
      
      getcache(employee) {

        let params = new HttpParams()
                      .set("loca", employee)
      
       // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
        return this.http.get<User>(this.apiURL + '/getCache',{params:params}).pipe(
           map(
             userData => {
              
              return userData;
             }
           )
      
          );
       
        }; 




searchLocation(LocName: SelectedLocation) {
  return this.http.post<SelectedLocation>(this.apiAdminURL + '/createShops', JSON.stringify(LocName), this.httpOptions)
  
  } 

 // Http Options
  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 }  

// HttpClient API post() method => Create employee

createShop(employee) {
  return this.http.post<ShopComponents>(this.apiAdminURL + '/createShops', JSON.stringify(employee), this.httpOptions)
 
}  

createPromotion(promoDetails) {
  return this.http.post<promotionDetails>(this.apiURL + '/createPromo', JSON.stringify(promoDetails), this.httpOptions)
 
} 



createProduct(prodDetails) {
  return this.http.post<productDetails>(this.apiAdminURL + '/createProduct', JSON.stringify(prodDetails), this.httpOptions)
 
} 

purchase(purchaseDet) {
  return this.http.post<purchaseDetails>(this.apiURL + '/purchase', JSON.stringify(purchaseDet), this.httpOptions)
 
} 


purchaseProduct(purchaseProdDet) {
  return this.http.post<purchaseProdDetails>(this.apiCustURL + '/purchaseproduct', JSON.stringify(purchaseProdDet), this.httpOptions)
 
} 

registerCust(custDetails) {
  
    let params = new HttpParams()
           .set("fullname", custDetails.fullname)
           .set("email", custDetails.email)
           .set("cntry", custDetails.cntry)
           .set("mobile", custDetails.mobile)
           .set("password", custDetails.password)
           .set("role", custDetails.role)
    return this.http.get<User>(this.apiAdminURL + '/registerCust',{params:params}).pipe(
      map(
        userData => {
         
         return userData;
        }
      )
 
     );
  
   };
   deliveryTime(DeliveryTime) {
    let params = new HttpParams()
           .set("Date", DeliveryTime.date)
           .set("PurchId", DeliveryTime.purchId)
           .set("Time", DeliveryTime.time)
     
    return this.http.get<User>(this.apiAdminURL + '/DeliveryTimeSetting',{params:params}).pipe(
      map(
        userData => {
         
         return userData;
        }
      )
 
     );
  
   };


loginMethod(credentials) {

  let params = new HttpParams()
                .set("username", credentials.username)
                .set("password", credentials.password)

 // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
  return this.http.get<User>(this.apiAdminURL + '/login',{params:params}).pipe(
     map(
       userData => {
        
        return userData;
       }
     )

    );
 
  };


  getPromoDetails(id:string) {

    let params = new HttpParams()
                  .set("shopregid", id)
                 
  
   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password) });
    return this.http.get<promotionDetails>(this.apiURL + '/readPromo',{params:params}).pipe(
       map(
         userData => {
         // sessionStorage.setItem('username',promotionDetails.shopregid);
          return userData;
         }
       )
  
      );
   
    };


    getProdDetails(id:string) {

      let params = new HttpParams()
                    .set("shopregid", id)
     
      return this.http.get<productDetails>(this.apiAdminURL + '/readProd',{params:params}).pipe
      (
         map
         (
           userData => 
           {
           // sessionStorage.setItem('username',promotionDetails.shopregid);
            return userData;
           }
          )
    
      );
     
      };


}


@Injectable({providedIn: 'root'})
export class ScheduledDelivery {

  constructor() {
    this.SchDelivery = [];
    this.SchDeliveryTime = [];
  }
  itemformats = { PurchaseId: String, DeliveryId: String, Fleet_id:String, Delivery_status: String,Items_count: Number,Pincode:Number,Total_amount:Number,Time:String,address:String };
  SchDelivery = [this.itemformats] ;

  DeliveryTimeDormat = {DeliveryTime: String ,DeliveryDate: Date}
  SchDeliveryTime=[this.DeliveryTimeDormat];
  addToDelivery(purchase_id,delivery_id,fleet_id,delivery_status,items_count,pincode,total_amt,time,address){

    this.SchDelivery.push({PurchaseId:purchase_id,DeliveryId:delivery_id,Fleet_id:fleet_id,Delivery_status:delivery_status,Items_count:items_count,Pincode:pincode,Total_amount:total_amt,Time:time,address:address});

  }
  addDeliveryTime(delTime,delDate){
    this.SchDeliveryTime.push({DeliveryTime:delTime,DeliveryDate:delDate});
  }
  getDeliveryTime(){
    return this.SchDeliveryTime;
  }

  getScheduledItems() {
    return this.SchDelivery;
  }

  clearScheduled() {
    this.SchDelivery = [];
    return this.SchDelivery;
  }

}



@Injectable()    
export class ImageService {    
    allImages = [] as  any;  
    
    getImages() {    
        return this.allImages = Imagesdelatils.slice(0);    
    }    
    
    getImage(id: number) {    
        return Imagesdelatils.slice(0).find(Images => Images.id == id)    
    }    
}    
const Imagesdelatils = [    
    { "id": 1, "category": "Veg","prodname": "Tomatto","unit": "1","unittype": "KG","Price": 10.50, "url": "assets/images/Tomatto.jpg" },    
    { "id": 2, "category": "Veg","prodname": "SmallLemon","unit": "5","unittype": "KG","Price": 20.60, "url": "assets/images/SmallLemon.jpg" },    
    { "id": 3, "category": "Veg","prodname": "Beens","unit": "1","unittype": "KG","Price": 30.60, "url": "assets/images/Beens.jpg" },    
    { "id": 4, "category": "Veg","prodname": "BigLemon","unit": "5","unittype": "KG","Price": 30.70, "url": "assets/images/BigLemon.jpg" },    
    { "id": 5, "category": "Veg","prodname": "WhiteGarlic","unit": "100","unittype": "Gram","Price": 70.55, "url": "assets/images/WhiteGarlic.jpg" },    
    { "id": 6, "category": "Veg","prodname": "Onion","unit": "1","unittype": "KG","Price": 60.60, "url": "assets/images/Onion.jpg" },    
    { "id": 7, "category": "Fruit","prodname": "GreenApple","unit": "1","unittype": "KG","Price": 100.00, "url": "assets/images/GreenApple.jpg" },    
    { "id": 8, "category": "Fruit","prodname": "Grapes","unit": "1","unittype": "KG","Price": 40.20, "url": "assets/images/Grapes.jpg" },    
    { "id": 9, "category": "Fruit","prodname": "Pineapple","unit": "1","unittype": "Piece","Price": 30.40, "url": "assets/images/Pineapple.jpg" },    
    { "id": 10, "category": "Fruit","prodname": "Tomatto","unit": "1","unittype": "KG","Price": 10.50, "url": "assets/images/Tomatto.jpg" },    
    { "id": 11, "category": "Fruit","prodname": "Gova","unit": "1","unittype": "KG","Price": 25.50, "url": "assets/images/Gova.jpg" },    
    { "id": 12, "category": "Nonveg","prodname": "GoldenEgg","unit": "10","unittype": "Piece","Price": 60.50, "url": "assets/images/GoldenEgg.jpg" },    
    { "id": 13, "category": "Nonveg","prodname": "WhiteEgg","unit": "1","unittype": "KG","Price": 83.60, "url": "assets/images/WhiteEgg.jpg" },    
    { "id": 14, "category": "Nonveg","prodname": "CoffeBean","unit": "1","unittype": "KG","Price": 300.10, "url": "assets/images/CoffeBean.jpg" },    
    { "id": 15, "category": "Fruit","prodname": "Banana","unit": "1","unittype": "KG","Price": 30.40, "url": "assets/images/Banana.jpg" },    
    { "id": 16, "category": "asus", "url": "assets/images/laptop15.jpg" },    
    { "id": 17, "category": "asus", "url": "assets/images/laptop16.jpg" },    
    { "id": 18, "category": "asus", "url": "assets/images/laptop17.jpg" },    
    { "id": 19, "category": "asus", "url": "assets/images/laptop18.jpg" },    
    { "id": 20, "category": "asus", "url": "assets/images/laptop20.jpg" },    
    
]    


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
    this.items = [];
  }
  flag=true;
  itemformat = { ProductName: String, Unit: Number, UnitType:String, net_amount: Number,basicUnitPrice: Number,basicUnit:Number,selectShopId:Number,locationid:String,customerId:String,address:String };
  items = [this.itemformat] ;
  total_price = 0;
  indexProduct = 0;
  updated_unit = 0;
  existing_unit = 0;
  changedPrice = 0;
 
  len=0;
  item_exist = { ProductName: String, Unit: Number, UnitType:String, net_amount: Number,basicUnitPrice: Number,basicUnit:Number};
  
  
  addToCart(PrdName,Unit,UnitType,net_amount,basicUnitPrice,basicUnit,selectShopId,locationid,customerId,address) {
    
      this.items.push({ProductName:PrdName,Unit:Unit, UnitType:UnitType,net_amount:net_amount,basicUnitPrice:basicUnitPrice,basicUnit:basicUnit,selectShopId:selectShopId,locationid:locationid,customerId:customerId,address:address });
      this.total_price = this.total_price + net_amount;
  
  }

  minusUpdateCart(PrdName,net_amount,UnitType,Unit,selectedUnitSplit,basicUnitPrice,selectShopId,locationid,customerId,address,basic_unit){

   this.changedPrice = 0;
   basic_unit=0;
   this.indexProduct = this.items.findIndex(X => X.ProductName === PrdName);
   this.item_exist = this.items[this.indexProduct];
   this.existing_unit = Number(this.item_exist.Unit);
   basic_unit=Number(this.item_exist.basicUnit);
   if (UnitType==='Kilogram' || (UnitType==='Piece'&& selectedUnitSplit==='1'))
   {
    Unit = this.existing_unit -Number(selectedUnitSplit);
    net_amount = Unit * basicUnitPrice;
    net_amount=net_amount.toFixed(2);
    this.changedPrice = (this.existing_unit - Unit) * basicUnitPrice;
   }
   if (UnitType==='Gram')
   {
    Unit = this.existing_unit -(Number(selectedUnitSplit) * 100);
    net_amount = (Unit * basicUnitPrice)/100;
    net_amount=net_amount.toFixed(2);
    this.changedPrice = ((this.existing_unit - Unit) * basicUnitPrice)/100;
   }
   
   if (Unit < basic_unit )
   {
    this.items.splice(this.indexProduct,1);
     this.len=this.items.length
          if(this.len>0){
            if(UnitType==='Gram'){
              this.changedPrice=(basic_unit * basicUnitPrice)/100;
              this.total_price = this.total_price - this.changedPrice;
            }
            else{
       this.changedPrice=basicUnitPrice*basic_unit;
        this.total_price = this.total_price - this.changedPrice;
            }
          }
          else{
            
            this.total_price =0;
          }
   }
   else{
    this.total_price = this.total_price - this.changedPrice;
    this.items[this.indexProduct] = {ProductName:PrdName, Unit:Unit, UnitType:UnitType,net_amount:net_amount,basicUnitPrice:basicUnitPrice,basicUnit:basic_unit,selectShopId:selectShopId,locationid:locationid,customerId:customerId,address:address};
   }
   

  }

  addUpdateCart(PrdName,net_amount,UnitType,Unit,selectedUnitSplit,basicUnitPrice,basic_unit,selectShopId,locationid,customerId,address){
    this.changedPrice = 0;
    basic_unit=0;
    this.indexProduct = this.items.findIndex(X => X.ProductName === PrdName);
    this.item_exist = this.items[this.indexProduct];
    this.existing_unit = Number(this.item_exist.Unit);
    basic_unit=Number(this.item_exist.basicUnit);
    if (UnitType==='Kilogram' || (UnitType==='Piece' && selectedUnitSplit==='1'))
    {
      if(Unit>=2){
        basicUnitPrice=net_amount/Unit;
        basicUnitPrice=basicUnitPrice.toFixed(2);
        this.flag=false;
      }

     Unit = this.existing_unit +Number(selectedUnitSplit);
     net_amount = Unit * basicUnitPrice;
     net_amount=net_amount.toFixed(2);
     this.changedPrice = (Unit - this.existing_unit) * basicUnitPrice;
    }

    if (UnitType==='Gram')
    {
     Unit = this.existing_unit +(Number(selectedUnitSplit) * 100);
     //net_amount = (Unit * basicUnitPrice)/100;
      if(Unit>=200 && basicUnitPrice>=net_amount)
     {
     basicUnitPrice=(net_amount/this.existing_unit)*100;
    //basicUnitPrice=basicUnitPrice.toFixed(2);
     }
     net_amount = (Unit * basicUnitPrice)/100;
     net_amount=net_amount.toFixed(2);
  
     this.changedPrice = ((Unit - this.existing_unit) * basicUnitPrice)/100;
    }
    
    this.total_price = this.total_price + this.changedPrice;
    this.items[this.indexProduct] = {ProductName:PrdName, Unit:Unit, UnitType:UnitType,net_amount:net_amount,basicUnitPrice:basicUnitPrice,basicUnit:basic_unit,selectShopId:selectShopId,locationid:locationid,customerId:customerId,address};

  }

  deleteCart(PrdName,net_amount,UnitType,Unit,selectedUnitSplit,basicUnitPrice,selectShopId,locationid,customerId,address,basic_unit,){
    this.changedPrice = net_amount;
    Unit=0;
    basic_unit=0;
    this.indexProduct = this.items.findIndex(X => X.ProductName === PrdName);
    this.item_exist = this.items[this.indexProduct];
    this.existing_unit = Number(this.item_exist.Unit);
    basic_unit=Number(this.item_exist.basicUnit);
  //  if (UnitType==='Kilogram' || (UnitType==='Piece'&& selectedUnitSplit==='1'))
   // {
    //  Unit = this.existing_unit -Number(selectedUnitSplit);
  //    Price = Unit * basicUnitPrice;
   //  this.changedPrice = (this.existing_unit - Unit) * basicUnitPrice;
   // }
   // if (UnitType==='Gram')
   // {
    //  Unit = this.existing_unit -(Number(selectedUnitSplit) * 100);
   // Price = (Unit * basicUnitPrice)/100;
   //  this.changedPrice = ((this.existing_unit - Unit) * basicUnitPrice)/100;
 //   }
    
    if (Unit < basic_unit )
    {
     this.items.splice(this.indexProduct,1);
      this.len=this.items.length
           if(this.len>0){
     this.total_price = this.total_price - this.changedPrice;
           }
           else{
             
             this.total_price =0;
           }
    }
    else{
     this.total_price = this.total_price - this.changedPrice;
     this.items[this.indexProduct] = {ProductName:PrdName, Unit:Unit, UnitType:UnitType,net_amount:net_amount,basicUnitPrice:basicUnitPrice,basicUnit:basic_unit,selectShopId:selectShopId,locationid:locationid,customerId:customerId,address:address};
    }
    
  }
  getItems() {
    return this.items;
  }
  getTotalAmount() {
    return this.total_price;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  clearTotalAmount() {
    this.total_price = 0;
    return this.total_price;
  }

}

