import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/Shared/_models/member';
import { MemberService } from 'src/app/Shared/_services/member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {


  //username
  username:any;

  //Member(user)
  member:Member;

  //MemberService(Dependency Injection)
  constructor(private memberService:MemberService,private route:ActivatedRoute) {

       //*****************************************/
      //RECEIVE username from Parametrized Route - via ActivatedRoute
     //****************************************/
    //Route: '/members/username' 
    //receive username to get user by username + fetch userDetails
    this.username = this.route.snapshot.paramMap.get('username');
  
  }


  //Load -> when view is fully initialized
  ngOnInit(): void {
    //call methods
    this.getMember(this.username);
  }

  //=================---------
  //Get User by name (Member)
  //=================---------
  getMember(username:string){
    this.memberService.getMember(username).subscribe(res=>{
      this.member = res;
    });
  }
}
