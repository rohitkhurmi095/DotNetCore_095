import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/Shared/_models/member';
import { MemberService } from 'src/app/Shared/_services/member.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  //Members(All Members):Observable
  members:Observable<Member[]>;


  //Service Object - DependencyInjection
  constructor(private memberService:MemberService) {
      
        //==========---------
       //Get Users(Members)
      //==========-----------
      this.members = this.memberService.getMembers();
   }

  //Load -> when view is fully initialized
  ngOnInit(): void {
  
  }

}
