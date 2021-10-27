import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '../_models/member';
import { Global } from '../global';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';

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

  
  //**[ STORE Members data STATE ]**
  //Members[]
  members:Member[];

  //HttpClient - for requests
  constructor(private http:HttpClient) { }

  
  //___________
  //Get Users
  //===========
  //Type: Member[]
  //of(data) - converts data to observable type
  getMembers():Observable<Member[]>{
    
    //if there is members in members[] => return members
    if(this.members?.length>0){
      return of(this.members);
    }

    //else call API + return members(res)
    return this.http.get<Member[]>(Global.BASE_API_PATH + 'users/').pipe(
      map(res=>{
        this.members = res;
        //members 
        return res;
      })
    );
  }




  //_________________
  //Get User by name
  //=================
  //Type: Member
  getMember(username:string):Observable<Member>{

    //Find member in members[]
    const member = this.members.find(x=>x.username === username);

    //If member is found => return member
    if(member!=undefined){
      return of(member);
    }

    //Else call API + Get member by username
    return this.http.get<Member>(Global.BASE_API_PATH + 'users/'+username);
  }




  //_____________________________
  //Update LoggedIn User Profile
  //=============================
  //Type:Member
  //doesn't return any data => status:204 NoContent()
  updateMember(member:Member):Observable<any>{
    return this.http.put<any>(Global.BASE_API_PATH + 'users',member).pipe(
      map(()=>{
        //1.Find the Index of member to be updated
        const index = this.members.indexOf(member);
        //2.Update member at that index
        this.members[index] = member;
      })
    );
  }
}
