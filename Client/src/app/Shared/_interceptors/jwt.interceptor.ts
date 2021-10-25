import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { User } from '../_models/user';

//============
//Interceptor
//============
//Interceptor = middleware(used to manipulate request)
//REQUEST -> INTERCEPTOR(write common code here) -> SERVER
//-----------
//manipulate middleware request: req.clone({})
//check flag in header: req.headers.has('flag')
//remove flag from header: req.clone({headers: req.headers.delete('flag')})
//set headers: req.clong({setHeaders:{}})
//call to next middleware: return next.handle(request)
//-------------

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  //AccountService (Dependnecy Injection)
  constructor(private accountService:AccountService) {}

  //Interceptor method of HttpInterceptor Interface
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      //request to be manipulated
      //--------------------------
      let req:any;

      //FROM AccountService
      //--------------------
      //currentUser:User type{username,token}
      let currentUser:User;


      //UserLoggedIn => GetCurrentUser
      //*******************************/
      //**GET currentUser**
      this.accountService.CurrentUser.subscribe(res=>{
          currentUser = res;

        //If User is loggedIn
        if(currentUser){
            // ----- [SET HEADERS] -----
            //Pass JWT + set'Content-Type:application/json' in headers
            req = request.clone({
                setHeaders:{
                  'Content-Type':'application/json',
                  'Authorization': `Bearer ${currentUser.token}`
                }
            });
        }
        //Else only set ContentType:'application/json' in headers
        //--------------------------
        else{
          //----- [SET HEADERS] -----
          req = request.clone({
            setHeaders:{'Content-Type':'application/json'}
          }); 
        }   
      });



      //Call to next middleware
      //========================
      //(req = manipulated request)
      return next.handle(req);
  }
}
