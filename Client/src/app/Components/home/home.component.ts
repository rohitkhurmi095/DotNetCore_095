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


  //HttpClient -> handling requests
  constructor(private http:HttpClient) { }

  //Load -> when view is fully initialized
  ngOnInit(): void {

  }

  //Register Toggler
  //=================
  registerToggler(){
    this.registerMode = !this.registerMode;
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
