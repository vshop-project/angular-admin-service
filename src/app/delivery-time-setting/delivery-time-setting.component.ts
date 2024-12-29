import { Component, Inject, OnInit } from '@angular/core';
import { AppService, DeliveryTime, ScheduledDelivery } from '../service/http-client.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../package/package.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe, Time } from '@angular/common';

@Component({
  selector: 'app-delivery-time-setting',
  templateUrl: './delivery-time-setting.component.html',
  styleUrls: ['./delivery-time-setting.component.css'],

})
export class DeliveryTimeSettingComponent implements OnInit {

Id:any;
delivery_unit_type:any;
time:any;
tempTime:any;
formattedDate: string;
originalDate: Date;
TimeSetting: DeliveryTime= new DeliveryTime("","","");

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };


  constructor(public httpclientService: AppService,
    public router: Router, public dialogRef: MatDialogRef<DeliveryTimeSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private sheduledDelivery: ScheduledDelivery ) { 
      
      this.Id=data.destination_Id,
      this.delivery_unit_type=data.deliveryType
    }

  ngOnInit(): void {
  }

 timeSetting(): void {
 const Time=this.time;
  //const aaaaa=this.times;
  // Extracting hour and minute components
  const [hour, minute] = Time.split(':');

  // Determining AM/PM value
  const period = hour >= 12 ? 'PM' : 'AM';

  console.log(`Selected Time: ${Time}`);
  console.log(`Hour: ${hour}`);
  console.log(`Minute: ${minute}`);
  console.log(`Period: ${period}`);
  const formattedHours = (parseInt(hour, 10) % 12) || 12;
  const formattedTime = `${formattedHours}:${minute} ${period}`;
  //console.log(formattedTime);

  this.TimeSetting.time=formattedTime;
  this.TimeSetting.purchId=this.Id;
  this.originalDate = new Date(this.TimeSetting.date);
  const datePipe = new DatePipe('en-US');
const vvvv= datePipe.transform(this.originalDate, 'medium');
  //const dateObject = new Date( this.TimeSetting.date);
  //this.TimeSetting.date=this.formatDate(dateObject)


this.sheduledDelivery.addDeliveryTime(this.TimeSetting.time,vvvv);
    // this.httpclientService.deliveryTime(this.TimeSetting)
    // .subscribe( data => {
    //  alert("Delivery time setted");
    this.dialogRef.close();
        this.router.navigate(['/deliveryUnitDisplay',this.Id,this.delivery_unit_type]);
    // });
  }



}
