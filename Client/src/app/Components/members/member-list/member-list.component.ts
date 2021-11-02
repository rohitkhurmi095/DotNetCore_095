import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Shared/_models/member';
import { MemberService } from 'src/app/Shared/_services/member.service';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/Shared/_models/pagination';

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
  //Default(passed as queryParamas)
  pageNumber = 1;
  pageSize = 5;

  //Service Object - DependencyInjection
  constructor(private memberService:MemberService) {}

  //Load -> when view is fully initialized
  ngOnInit(): void {
    this.loadMembers();
  }

  //============
  //GET Members
  //============
  loadMembers(){
    //passQuery params for Pagination
    //returns paginatedResult
    this.memberService.getMembers(this.pageNumber,this.pageSize).subscribe(res=>{

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
    this.pageNumber = event.page;

    //GetMembers - for nextPage
    this.loadMembers();
  }

}
