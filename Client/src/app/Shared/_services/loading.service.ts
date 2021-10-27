import { Injectable } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';


/*Install Packages:
  -----------------
  npm install @angular/cdk
  ng add ngx-spinner */

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  
  //BusyRequests
  busyRequestCount = 0;

  //ngxSpinner 
  constructor(private spinnerService:NgxSpinnerService) { }

  //==============
  //BUSY REQUESTS
  //==============
  busy(){
    //increment busyreq count
    this.busyRequestCount++;

    //call spinnerService -> SHOW SPINNER
    this.spinnerService.show(undefined,{
      type:'line-scale-party',
      bdColor:'rgba(255,255,255,0)',
      color:'#333333'
    });
  }


  //==============
  //IDEL REQUESTS
  //==============
  Idle(){
    //decrement busyreq count
    this.busyRequestCount--;

    //If there is no busy request
    //(count cannot be negative)
    if(this.busyRequestCount<=0){
      this.busyRequestCount = 0;

      //call spinnerService -> HIDE SPINNER
      this.spinnerService.hide();
    }

  }

}
