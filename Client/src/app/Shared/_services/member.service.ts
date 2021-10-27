import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '../_models/member';
import { Global } from '../global';
import { Observable } from 'rxjs';

//===========
//Http Header
//===========
//INTERCEPTORS - used for setting headers
//If Interceptor not used -> pass httpOptions in service method
//--------------
//Requires JWT Token => Pass JWT in Headers
//**Get Token from user.Token in localStorage (current user login)**
//Pass Token in Header: {Authorization: Bearer Token}
/*const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('user')).token
  })
}*/


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  //HttpClient - for requests
  constructor(private http:HttpClient) { }

  
  //___________
  //Get Users
  //___________
  //Type: Member[]
  getMembers():Observable<Member[]>{
    return this.http.get<Member[]>(Global.BASE_API_PATH + 'users/');
  }
  
    
  //_________________
  //Get User by name
  //_________________
  //Type: Member
  getMember(username:string):Observable<Member>{
    return this.http.get<Member>(Global.BASE_API_PATH + 'users/'+username);
  }


  //_____________________________
  //Update LoggedIn User Profile
  //_____________________________
  //Type:Member
  updateMember(member:Member):Observable<any>{
    return this.http.put<any>(Global.BASE_API_PATH + 'users',member);
  }
}
