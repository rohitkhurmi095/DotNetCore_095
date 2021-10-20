import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { Global } from 'src/app/Shared/global';
import { AccountService } from 'src/app/Shared/_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent implements OnInit {

  //Model
  model:any = {
    username:"",
    password:""
  };


  //OUTPUT Data to HomeComponent(Child->Parent)
  //sending CancelNotification -> to set registerMode=false
  //use EventEmitter() to emit value in Cancel() method
  @Output() CancelRegister = new EventEmitter(); 
  
  //AccountService(Dependency Injection),ToastrService
  constructor(private accountService:AccountService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  //=========
  //Register
  //=========
  register(){
   this.accountService.register(this.model).subscribe(res =>{
    //res - register form data 
    //console.log(res);

    //Toastr Notification
    this.toastr.success("Registerd Successfully!");

    //Move to HomePage after Registration
    this.cancel();
   },error=>{
     //console.log(error);

     //Toastr Notification
     this.toastr.error(error.error);
   })
  }


  //________
  // Cancel
  //========
  cancel(){
    //console.log("Registration Cancelled!");
    //Emit value using eventEmitter
    this.CancelRegister.emit(false);

  }
}
