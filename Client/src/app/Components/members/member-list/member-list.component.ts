import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Shared/_models/member';
import { MemberService } from 'src/app/Shared/_services/member.service';
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

  
  //Default QueryParams(passed as queryParamas)
  //**PAGINATION**
  //--------------
  pagination:Pagination;

  //UserParams {pageNumber,pageSize,gender,minAge,maxAge}
  userParams:UserParams;

  //CurrentUser
  user:User;

  //GenderSelector(userParams)
  //--------------
  genderList = [
    {display:'Male',value:'male'},
    {display:'Female',value:'female'}
  ];

  //Service Object - DependencyInjection
  //MemberService,AccountService
  constructor(private memberService:MemberService,private accountService:AccountService){
    
    //GET userParams from memberService
    //--------------
    this.userParams = this.memberService.getUserParams();
  }

  
  //Load -> when view is fully initialized
  ngOnInit(): void {
    this.loadMembers();
  }


  //============
  //GET Members
  //============
  loadMembers(){
    //console.log("Filter applied + Members loaded!");

    //Set userParams - before loading members()
    this.memberService.setUserParams(this.userParams);

    //pass QueryParams - UserParams
    //returns paginatedResult
    this.memberService.getMembers(this.userParams).subscribe(res=>{

      //Get Users(Members)
      //==========-----------
      this.members = res.result;
      
      //Pagination (from API response Headers)
      //-----------
      //queryParams(currentPage,itemsPerPage),totalItems,totalPages
      this.pagination = res.pagination;

      //console.log(JSON.stringify(this.pagination));
      //{"currentPage":1,"itemsPerPage":5,"totalItems":7,"totalPages":2}
    });
  }


  //-----------------------
  //NEXT PAGE (PAGINATION)
  //-----------------------
  pageChanged(event:any){
    //console.log("Next Page loaded.....");

    //NextPage
    this.userParams.pageNumber = event.page;

    //Set userParams - before loading members()
    this.memberService.setUserParams(this.userParams);
    
    //GetMembers - for nextPage
    this.loadMembers();
  }


  //_______________
  //Reset Fileters
  //===============
  resetFilters(){
    //console.log("Filter Reset");

    //Reset userParams
    this.userParams = this.memberService.resetUserParams();

    //show members after resetting userParams
    this.loadMembers();
  }

}
