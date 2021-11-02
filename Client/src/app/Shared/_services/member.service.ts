import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '../_models/member';
import { Global } from '../global';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import {PaginatedResult} from '../_models/pagination';
import { UserParams } from '../_models/userParams';

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

  //PaginationResult(response,pagination) - stores our resultSet
  //paginationResult:PaginatedResult<Member[]> = new PaginatedResult<Member[]>();


  //HttpClient - for requests
  constructor(private http:HttpClient) { }

   //----------------------
  //1.Get PaginationHeaders
  //======================
  private getPaginationHeaders(pageNumber:number,pageSize:number){
      //---- PAGINATION ----
     //check if params are passed in method?
    //Params(query)
    let params = new HttpParams();

    //Add PageNumber,itemsPerPage to queryParams
    if(pageNumber!==null && pageSize!==null){
      params = params.append('pageNumber',pageNumber.toString());
      params = params.append('pageSize',pageSize.toString());
    }
    return params;
  }


  //---------------------
  //2.Get PaginatedResult
  //=====================
  private getPaginatedResult<T>(url:any,params:any){
    //PaginationResult(response,pagination) - stores our resultSet
    const paginationResult:PaginatedResult<T> = new PaginatedResult<T>();

    return this.http.get<T>(url, {observe:'response',params}).pipe(
      map(res=>{
         //Get Pagination Headers (API Response)
         if(res.headers.get('Pagination')!==null){
          paginationResult.pagination = JSON.parse(res.headers.get('Pagination'));
        }

        //pagination result
        return paginationResult;
      })
    )
  }


  //==========
  //Get Users
  //===========
  //methods {1+2}
  //Type: Member[]
  //pass UserParams instance(Class - contains queryParams as properties) - as queryParams
  getMembers(userParams:UserParams){

    //Params
    //*******
    //Pagination Params
    //------------------
    //pass queryParams for Pagination - page(pageNumber),itemsPerPage(pageSize)
    let params = this.getPaginationHeaders(userParams.pageNumber,userParams.pageSize);
    //Age Params
    //-----------
    params = params.append('minAge',userParams.minAge.toString());
    params = params.append('maxAge',userParams.maxAge.toString());
    //Gender Params
    //--------------
    params = params.append('gender',userParams.gender.toString());

    
    //call API + return members(res)
    //******************************
    //Gives full response back
    return this.getPaginatedResult<Member[]>(Global.BASE_API_PATH +"users",params);
  }



  //_________________
  //Get User by name
  //=================
  //Type: Member
  getMember(username:string):Observable<Member>{

    //Find member in members[]
    const member = this.members?.find(x=>x.username === username);

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


  //==============
  //SET MainPhoto
  //==============
  //SET-Main-Photo API Call
  //Put req => need to send something in body
  //if noting is there to send => send {} blank object
  setMainPhoto(photoId:number){
    return this.http.put(Global.BASE_API_PATH + "users/set-main-photo/"+photoId, {});
  }


  //==============
  //DELETE Photo
  //==============
  //DELETE-Photo API Call
  deletePhoto(photoId:number){
    return this.http.delete(Global.BASE_API_PATH + "users/delete-photo/"+photoId);
  }

}
