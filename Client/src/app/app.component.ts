import { HttpClient } from '@angular/common/http';
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

  //Users
  Users:any;

  //Dependency Injection -> HttpClient
  constructor(private  http:HttpClient,private accountService:AccountService){}

  //Loads -> when view is fully initialized
  ngOnInit(){
    //AllUsers
    this.getUsers();

    //CurrentUser
    this.setCurrentUser();
  }

  //AllUsers
  //=========
  getUsers(){
    this.http.get("http://localhost:1472/api/users/").subscribe(res=>{
      this.Users = res;
    });
  }


  //CurrentUser
  //============
  setCurrentUser(){
    //get user from localStorage + pass in setCurrentUser in accountService
    const user:User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

}
