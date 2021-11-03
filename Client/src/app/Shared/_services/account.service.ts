import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, using } from 'rxjs';
import { Global } from '../global';
import {map} from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //HttpClient - for handling requests
  constructor(private http:HttpClient) { }

  
  //(SubjectBehaviour - Observable)
  //------------------
  //CurrentUser Data
  private currentUser = new BehaviorSubject<any>(null);
  //User is loggedIn or not
  private loggedIn = new BehaviorSubject<boolean>(false);


  //getter methods - to use outside component
  //asObservable() -> subject cannot be modified using next()
  //--------------
  get CurrentUser(){
    return this.currentUser.asObservable();
  }
  get isLoggedIn(){
    return this.loggedIn.asObservable();
  }


  //--------------------
  //**SET CurrentUser**
  //--------------------
  //used in appComponent to make user loggedIn until logOut is clicked
  //get user from localStorage & pass in this method
  //SET CURRENT USER = Add to BehaviourSubject + Add to LocalStorage 
  setCurrentUser(user:User){
     //SetCurrent user detais = user in BehaviourSubject
     this.currentUser.next(user);

     //add user to LocalStorage
     localStorage.setItem('user',JSON.stringify(user));
  }


  //=======
  //Login
  //=======
  //model = formData passed into login() method
  login(model:any){
    //Call API(accounts/login)
    return this.http.post(Global.BASE_API_PATH+"account/login",model).pipe(
      map((res:any)=>{
        
        //Get user from API
        const user:User = res;
        //console.log("LOGIN API RESPONSE:"+ JSON.stringify(res));

        //If **Success** 
        if(user){
          //Set loggedIn Status = true
          this.loggedIn.next(true);

          //Set CurrentUser
          this.setCurrentUser(user);
        }
      })
    );
  }
 

  
  //=========
  //Register
  //=========
  register(model:any){
    //Call Register API
    return this.http.post(Global.BASE_API_PATH + "account/register",model).pipe(
      map((res:any)=>{
        //Get User from API
        const user:User = res;

        //If **Success**
        if(user){          
          //Set loggedIn Status = true
          this.loggedIn.next(true);

          //Set CurrentUser
          this.setCurrentUser(user);
        }
        //optional to show 'res' from API directly without JSON.Stringify(res)
        return user;
      })
    );
  }


  //========
  //Logout
  //========
  logout(){
    //Clear LocalStorage
    //localStorage.removeItem('user');
    localStorage.clear(); 

    //SetCurrent user detais = null in BehaviourSubject
    this.currentUser.next(null);

    //Set loggedIn Status = false
    this.loggedIn.next(false);
  }
  
}


