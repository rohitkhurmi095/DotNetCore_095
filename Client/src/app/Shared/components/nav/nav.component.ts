import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../_services/account.service';
import {Router} from '@angular/router';
import {User} from '../../_models/user';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //loginForm instance
  loginForm:FormGroup;

  //CurrentUser
  currentUser:Observable<User>;
  
  //AccountService,Router,ToastrNotification,FormBuilder
  constructor(private accountService:AccountService,private router:Router,private toastr:ToastrService,private _fb:FormBuilder) { }

  ngOnInit(): void {
    //________________
    //Get CurrentUser
    //________________
    //currentUser -> holds user obj
    this.currentUser = this.accountService.CurrentUser;

    //Form
    this.setFormState();
  }


  //=======
  //Login
  //=======
  //pass model(formData) -> login
  login(){
    this.accountService.login(this.loginForm.value).subscribe(res=>{
      //res = loggedInData
      //console.log("LoggedIn Successfully!");

      //Toastr Notification
      this.toastr.success("LoggedIn Successfully!");

      //After Login -> navigate to membersComponent
      this.router.navigateByUrl('/members');

      //RESET FORM STATE
      this.loginForm.reset();
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

 
  //===========
  //FormData
  //===========
  setFormState(){
    this.loginForm = this._fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }
}
