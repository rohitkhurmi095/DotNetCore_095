import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../_services/account.service';
import {User} from '../../_models/user';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //Model
  model:any = {
    username:"",
    password:""
  };

  //CurrentUser
  currentUser:Observable<User>;
  
  //AccountService
  constructor(private accountService:AccountService) { }


  ngOnInit(): void {
    //________________
    //Get CurrentUser
    //________________
    //currentUser -> holds user obj
    this.currentUser = this.accountService.CurrentUser;

  }


  //=======
  //Login
  //=======
  //pass model(formData) -> login
  login(){
    this.accountService.login(this.model).subscribe(res=>{
      //res = loggedInData
      //console.log("LoggedIn Successfully!");
    },error=>{
      console.log(error);
    })
  }


  //=======
  //Logout
  //=======
  logout(){
    this.accountService.logout();
    //console.log("LoggedOut Successfully!");
  }

 
}
