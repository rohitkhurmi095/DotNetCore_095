import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { Global } from 'src/app/Shared/global';
import { AccountService } from 'src/app/Shared/_services/account.service';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent implements OnInit {

  //Model
  model:any = {
    username:"",
    password:"",
    favUser:""
  };

  //RECEIVING AllUsers from HomeComponent(Parent->Child)
  @Input('AllUsers') UsersList:any;

  //OUTPUT Data to HomeComponent(Child->Parent)
  //sending CancelNotification -> to set registerMode=false
  //use EventEmitter() to emit value in Cancel() method
  @Output() CancelRegister = new EventEmitter(); 
  
  //AccountService(Dependency Injection)
  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  //=========
  //Register
  //=========
  register(){
   this.accountService.register(this.model).subscribe(res =>{
    //res - register form data 
    console.log(res);

    //Move to HomePage after Registration
    this.cancel();
   },error=>{
     console.log(error);
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
