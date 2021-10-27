import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ListsComponent } from './Components/lists/lists.component';
import { MemberDetailsComponent } from './Components/members/member-details/member-details.component';
import { MemberEditComponent } from './Components/members/member-edit/member-edit.component';
import { MemberListComponent } from './Components/members/member-list/member-list.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { AuthGuard } from './Shared/_guards/auth.guard';

const routes: Routes = [
  //HomePage
  {path:'',component:HomeComponent},
  

  //RouteGuard Protected
  //implement routeGuard in single line for all routes
  {path:'',
   runGuardsAndResolvers:'always',
   canActivate:[AuthGuard],
   children:[
      //Members
      //========
      //all members
      {path:'members',component:MemberListComponent},
      //member details (receive username via ActivatedRoute)
      {path:'members/:username',component:MemberDetailsComponent},
      //edit member profile
      {path:'member/edit',component:MemberEditComponent},
  
      //Lists
      {path:'lists',component:ListsComponent},

      //Messages
      {path:'messages',component:MessagesComponent},
   ]},


  //WildCardRoute 
  {path:'**',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
