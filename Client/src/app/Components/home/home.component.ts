import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/Shared/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //RegisterMode
  registerMode:boolean = false;
  //Users
  users:any;

  //HttpClient -> handling requests
  constructor(private http:HttpClient) { }

  //Load -> when view is fully initialized
  ngOnInit(): void {
    this.getUsers();
  }

  //Register Toggler
  //=================
  registerToggler(){
    this.registerMode = !this.registerMode;
  }


  //==============
  //GET ALL USERS
  //==============
  getUsers(){
    this.http.get(Global.BASE_API_PATH + "users").subscribe(res=>{
      this.users = res;
    },error=>{
      console.log(error);
    })
  }


  //___________________
  //CancelRegisterMode
  //___________________
  //receives value from Child(registerComponent) via EventEmitter
  CancelRegisterMode(event:boolean){
    //set event value in registerMode
    this.registerMode = event;
  }

}
