import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Shared/_models/member';
import { MemberService } from 'src/app/Shared/_services/member.service';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/Shared/_models/pagination';
import { AccountService } from 'src/app/Shared/_services/account.service';
import { User } from 'src/app/Shared/_models/user';
import { UserParams } from 'src/app/Shared/_models/userParams';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  //Members(All Members):Observable
  members:Member[];

  //**PAGINATION**
  //--------------
  pagination:Pagination;

  //Default QueryParams(passed as queryParamas)
  UserParams:UserParams;

  //CurrentUser
  user:User;

  //Service Object - DependencyInjection
  //Member,AccountService
  constructor(private memberService:MemberService,private accountService:AccountService) {
    
    //---------------------------------------------
    //Get CurrentUser + Pass gender to UserParams
    //---------------------------------------------
    //CurrentUser -> to set gender in userParams
    this.accountService.CurrentUser.subscribe(res=>{
      //CurrentUser
      this.user = res;

      //Pass user to UserParams class -> to get gender of user
      this.UserParams = new UserParams(this.user);

    });
  
  
  }

  //Load -> when view is fully initialized
  ngOnInit(): void {
    this.loadMembers();
  }

  //============
  //GET Members
  //============
  loadMembers(){
    //pass QueryParams - UserParams
    //returns paginatedResult
    this.memberService.getMembers(this.UserParams).subscribe(res=>{

      //Get Users(Members)
      //==========-----------
      this.members = res.result;
      
      //Pagination (from API response Headers)
      //-----------
      //queryParams(currentPage,itemsPerPage),totalItems,totalPages
      this.pagination = res.pagination;
    });
  }

  //-----------------------
  //NEXT PAGE (PAGINATION)
  //-----------------------
  pageChanged(event:any){
    //NextPage
    this.UserParams.pageNumber = event.page;

    //GetMembers - for nextPage
    this.loadMembers();
  }

}
