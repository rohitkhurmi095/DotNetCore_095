import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/Shared/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  //Receiving 'member' data from MemberList Component
  //(Parent -> Child = @Input() Decorator)
  @Input() member:Member;


  constructor() { }

  ngOnInit(): void {
  }

}
