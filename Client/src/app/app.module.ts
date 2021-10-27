import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

//Components
import { AppComponent } from './app.component';
import { NavComponent } from './Shared/components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { ResisterComponent } from './Components/resister/resister.component';
import { MemberListComponent } from './Components/members/member-list/member-list.component';
import { MemberDetailsComponent } from './Components/members/member-details/member-details.component';
import { ListsComponent } from './Components/lists/lists.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { MemberCardComponent } from './Components/members/member-card/member-card.component';

//Interceptor (Middleware)
import { JwtInterceptor } from './Shared/_interceptors/jwt.interceptor';
import { MemberEditComponent } from './Components/members/member-edit/member-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ResisterComponent,
    MemberListComponent,
    MemberDetailsComponent,
    ListsComponent,
    MessagesComponent,
    MemberCardComponent,
    MemberEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    //ToastrModule
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
    //ngx-bootstrap Tabs Module
    TabsModule.forRoot(),
    //PhotoGallery
    NgxGalleryModule
  ],

  //Provide interceptors used here
  //Interceptors (multi => multiple interceptors)
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor ,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
