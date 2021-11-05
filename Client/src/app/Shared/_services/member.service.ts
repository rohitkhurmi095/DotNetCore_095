import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '../_models/member';
import { Global } from '../global';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs/operators';
import {PaginatedResult} from '../_models/pagination';
import { UserParams } from '../_models/userParams';
import { User } from '../_models/user';
import { AccountService } from './account.service';


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
  members:Member[] = [];

  //CurrentUser
  user:User;

  //UserParams (queryParams)
  userParams:UserParams;

  /***** MEMBER CACHE *****/
  memberCache = new Map();

  
  //HttpClient - for requests
  constructor(private http:HttpClient,private accountService:AccountService) {

    //GET loggedIn CurrentUser from accountsService 
    //pass userDetails in userParams to get currentUser Gender  
    //----------------------------------------------------------
    //CurrentUser -> to set gender in userParams
    this.accountService.CurrentUser.subscribe(res=>{
      this.user = res;

      //Pass user to UserParams class -> to get gender of user
      this.userParams = new UserParams(res);
    });
  }


  //Get UserParams (to use in member-list Component)
  //==============
  //return userParams
  getUserParams()
  {
    return this.userParams;
  }

  //Set UserParams (update queryParams from member-list component)
  //==============
  //set userParams
  setUserParams(params:UserParams){
    this.userParams = params;
  }

  //RESET UserParams
  //=================
  //Reset = create new instance of UserParams class + pass Current User
  resetUserParams(){
    this.userParams = new UserParams(this.user);
    return this.userParams;
  }


  //_______________________
  //1.GET PaginatedHeaders
  //_______________________
  //returns params
  private getPaginatedHeader(pageNumber:number,pageSize:number){
     //check if params(queryString) are passed in method?
     let params = new HttpParams();

     //Pagination Params
     if(pageSize!==null && pageNumber!==null){
       params = params.append('pageNumber',pageNumber.toString());
       params = params.append('pageSize',pageSize.toString());  
     }
    
     //return params
     return params;
  }

  //_____________________
  //2.GET PaginatedResult
  //_____________________
  //returns paginatedResult(result + Pagination)
  private getPaginatedResult<T>(url:any,params:any){

    //pass UserParams instance(Class - contains queryParams as properties) - as queryParams
    //PaginatedResult = result<Member[]> + pagination - stores our resultSet
    const paginatedResult:PaginatedResult<T> = new PaginatedResult<T>();

    //call API + return response
    return this.http.get<T>(url,{observe:'response',params}).pipe(
      map(res=>{
        
        //Response Body(Memebers[])
        paginatedResult.result = res.body;
        
        //Get Pagination Headers (API Response)
        if(res.headers.get('Pagination')!== null){
          paginatedResult.pagination = JSON.parse(res.headers.get('Pagination'));
        }

        //return PaginatedResult
        return paginatedResult;
      })
    )
  }

  //==========
  //Get Users
  //===========
  //methods {1+2}
  //Type: Member[]
  getMembers(userParams:UserParams){

    //userParams - object
    //Object.keys - converts object -> value
    //console.log(Object.values(userParams));
    //[1, 5, 18, 99, 'lastActive', 'female']
    //console.log(Object.values(userParams).join('-'));
    //1-5-18-99-lastActive-female

    //GET Response from memberCache
    //------------------------------
    //before calling API if response is there
    var response = this.memberCache.get(Object.values(userParams).join('-'));
    if(response){
      return of(response);
    }

    //Set Query Params
    //*****************
    //Pagination - page(pageNumber),itemsPerPage(pageSize)
    let params = this.getPaginatedHeader(userParams.pageNumber,userParams.pageSize);
    //Age
    params = params.append('minAge',userParams.minAge.toString());
    params = params.append('maxAge',userParams.maxAge.toString());
    //Gender
    params = params.append('gender',userParams.gender.toString());
    //OrderBy
    params = params.append('orderBy',userParams.orderBy.toString());
  
    //call API + return members(res)
    //******************************
    //Gives full response back 
    return this.getPaginatedResult<Member[]>(Global.BASE_API_PATH +"users",params).pipe(
      map(response=>{

        //SET Response -> memberCache when API is called
        this.memberCache.set(Object.values(userParams).join('-'),response);
        return response;
      })
    );
  }





  //_________________
  //Get User by name
  //=================
  //Type: Member
  getMember(username:string):Observable<Member>{

    //GET Response from memberCache
    //------------------------------
    //before calling API if response is there
    //console.log(this.memberCache);
    //Map(1) {'1-5-18-99-lastActive-female' => PaginatedResult}
    //Find individual member inside a memberCache
  
    //var member = [...this.memberCache.values()];
    //console.log(member);
    //[PaginatedResult, PaginatedResult]
    // |_ result        |__ result
    //combine result values of arrays

    //Get single member{}
    const member = [...this.memberCache.values()]
                 .reduce((arr,elem)=>arr.concat(elem.result),[])
                 .find((member:Member) =>member.username === username);

    if(member){
      return of(member);
    }

    //Find member in members[]
    //const member = this.members?.find(x=>x.username === username);
    //If member is found => return member
    /*if(member!=undefined){
      return of(member);
    }*/

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
