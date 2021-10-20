import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../_services/account.service';
import {Router} from '@angular/router';
import {User} from '../../_models/user';
import { ToastrService } from 'ngx-toastr';


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
  
  //AccountService,Router,ToastrNotification
  constructor(private accountService:AccountService,private router:Router,private toastr:ToastrService) { }


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

      //Toastr Notification
      this.toastr.success("LoggedIn Successfully!");

      //After Login -> navigate to membersComponent
      this.router.navigateByUrl('/members');
    },error=>{
      console.log(error);

      //Toastr notification
      this.toastr.error(error.error);
    })
  }


  //=======
  //Logout
  //=======
  logout(){
    this.accountService.logout();
    //console.log("LoggedOut Successfully!");

    //Toastr notification
    this.toastr.success("LoggedOut Successfully!");

    //After Logout -> navigate to HomeComponent
    this.router.navigateByUrl('/');
  }

 
}
