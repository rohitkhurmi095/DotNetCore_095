import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '../_models/member';
import { Global } from '../global';
import { Observable } from 'rxjs';

//===========
//Http Header
//===========
//Requires JWT Token => Pass JWT in Headers
//**Get Token from user.Token in localStorage (current user login)**
//Pass Token in Header: {Authorization: Bearer Token}
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer '+JSON.parse(localStorage.getItem('user')).token
  })
}


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
    return this.http.get<Member[]>(Global.BASE_API_PATH + 'users/',httpOptions);
  }
  
    
  //_________________
  //Get User by name
  //_________________
  //Type: Member
  getMember(username:string):Observable<Member>{
    return this.http.get<Member>(Global.BASE_API_PATH + 'user/'+username,httpOptions);
  }
}
