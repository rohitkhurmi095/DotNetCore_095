import { Component, OnInit } from '@angular/core';
import { User } from './Shared/_models/user';
import { AccountService } from './Shared/_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';


  //Dependency Injection -> HttpClient
  constructor(private accountService:AccountService){}

  //Loads -> when view is fully initialized
  ngOnInit(){

    //CurrentUser
    this.setCurrentUser();
  }

 

  //CurrentUser
  //============
  setCurrentUser(){
    //get user from localStorage + pass in setCurrentUser in accountService
    const user:User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

}
