import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Shared/_models/member';
import { MemberService } from 'src/app/Shared/_services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  //Members(All Members)
  members:Member[];


  //Service Object - DependencyInjection
  constructor(private memberService:MemberService) { }

  //Load -> when view is fully initialized
  ngOnInit(): void {
    //Call methods
    this.getMembers();
  
  }

  //==========---------
  //Get Users(Members)
  //==========---------
  getMembers(){
    this.memberService.getMembers().subscribe(res=>{
      this.members = res;
    })
  }


}
