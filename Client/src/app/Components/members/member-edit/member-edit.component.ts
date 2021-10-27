import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/Shared/_models/member';
import { User } from 'src/app/Shared/_models/user';
import { AccountService } from 'src/app/Shared/_services/account.service';
import { MemberService } from 'src/app/Shared/_services/member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  //FORM REFERENCE
  //---------------
  //@ViewChild directive 
  //To access template reference on Component
  //Used for template forms to access form ref in component
  //Form ref = #editForm=(ngForm)
  @ViewChild('editForm') editForm:NgForm;


  //currentUser
  user:User;
  //Member
  member:Member;

  //DependencyInjection
  constructor(private accountService:AccountService,private memberService:MemberService,private toastr:ToastrService) {
      //--------------------------------------------
      //Get LoggedIn CurrentUser => to get username
      //--------------------------------------------
      this.accountService.CurrentUser.subscribe(res=>{
        this.user = res;
      });
  }

  //Load -> when view is fully initialized
  ngOnInit(): void {
    this.getMember();
  }

 
  //-----------------------
  //Get Member by username
  //-----------------------
  //Get username from currentUser
  getMember(){
    this.memberService.getMember(this.user.userName).subscribe(res=>{
      this.member = res;
    })
  }


  //=================
  //UPDATE PROFILE
  //=================
  //dont return any value 
  //return 204 NoContent status on update
  updateProfile(){
    this.memberService.updateMember(this.member).subscribe(()=>{
  
        //toastr success notification
        this.toastr.success("Profile Updated Successfully!");

        //update form State (reset form to updated state [!dirty -> dirty (change)])
        //pass this.member = updated member data in form
        this.editForm.reset(this.member);
    });

  }
}
