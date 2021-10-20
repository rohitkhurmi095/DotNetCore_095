import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ListsComponent } from './Components/lists/lists.component';
import { MemberDetailsComponent } from './Components/members/member-details/member-details.component';
import { MemberListComponent } from './Components/members/member-list/member-list.component';
import { MessagesComponent } from './Components/messages/messages.component';

const routes: Routes = [
  //HomePage
  {path:'',component:HomeComponent},
  
  //Members
  {path:'members',component:MemberListComponent},
  {path:'members/:id',component:MemberDetailsComponent},
  
  //Lists
  {path:'lists',component:ListsComponent},
  
  //Messages
  {path:'messages',component:MessagesComponent},

  //WildCardRoute 
  {path:'**',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
