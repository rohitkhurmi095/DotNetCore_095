import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FileUploadModule } from 'ng2-file-upload';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TimeagoModule } from 'ngx-timeago';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

//Components
import { AppComponent } from './app.component';
import { NavComponent } from './Shared/components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { ResisterComponent } from './Components/resister/resister.component';
import { ListsComponent } from './Components/lists/lists.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { MemberListComponent } from './Components/members/member-list/member-list.component';
import { MemberCardComponent } from './Components/members/member-card/member-card.component';
import { MemberDetailsComponent } from './Components/members/member-details/member-details.component';
import { MemberEditComponent } from './Components/members/member-edit/member-edit.component';
import { PhotoEditorComponent } from './Components/members/photo-editor/photo-editor.component';

//Interceptor (Middleware)
import { JwtInterceptor } from './Shared/_interceptors/jwt.interceptor';
import { LoadingInterceptor } from './Shared/_interceptors/loading.interceptor';




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
    MemberEditComponent,
    PhotoEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    //ToastrModule
    ToastrModule.forRoot({
      positionClass:'toast-bottom-right'
    }),
    //ngx-bootstrap Tabs Module
    TabsModule.forRoot(),
    //PhotoGallery
    NgxGalleryModule,
    //NgxSpinnerModule
    NgxSpinnerModule,
    //FileUploadModule
    FileUploadModule,
    //NgxBootstrap DatePicker
    BsDatepickerModule.forRoot(),
    //NgxBootstrap Pagination
    PaginationModule.forRoot(),
    //NgxTimeAgo - pipe for last ActiveDate{last time user was Active} 
    TimeagoModule.forRoot(),
    //NgxButtons
    ButtonsModule.forRoot()

  ],

  //Provide interceptors used here
  //Interceptors (multi => multiple interceptors)
  providers: [
    //Authorization (Set JWT in headers) 
    {provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor ,multi:true},
    //Spinner - Loader on every request
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
