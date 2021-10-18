import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';

  //Users
  Users:any;

  //Dependency Injection -> HttpClient
  constructor(private  http:HttpClient){}

  //Loads -> when view is fully initialized
  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.http.get("http://localhost:1472/api/users/").subscribe(res=>{
      this.Users = res;
    });
  }

}
