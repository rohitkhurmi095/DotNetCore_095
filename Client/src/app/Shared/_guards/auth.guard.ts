import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //Depenedencies = AccountService|Router|ToastrNotification
  constructor(private accountService:AccountService,private router:Router,private toastr:ToastrService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;

    //Returns true/false -> if User is LoggedIn OR not!
    //-------------------
    return this.accountService.CurrentUser.pipe(
      map(user=>{
        //if user is loggedIn
        if(user){
          //Grant Access to route
          return true;
        }
        //if not user -> not loggedIn
        //Unauthorized Access
        this.toastr.error("Login to continue!");
        return false;
        })
      )
  }
}
