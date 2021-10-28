import { Component, Input, OnInit } from '@angular/core';
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
import { Global } from 'src/app/Shared/global';
import { Member } from 'src/app/Shared/_models/member';
import { Photo } from 'src/app/Shared/_models/photo';
import { User } from 'src/app/Shared/_models/user';
import { AccountService } from 'src/app/Shared/_services/account.service';
import { MemberService } from 'src/app/Shared/_services/member.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {


  //Receiving member details from Edit-MemberComponent
  @Input() member:Member;

  //CurrentUser
  //user = userName,Token
  user:User;

  //UPLOADER
  //----------
  uploader:FileUploader;
  hasBaseDropZoneOver:boolean = false;
  


  //AccountService,MemberService
  constructor(private accountService:AccountService,private memberService:MemberService) {
    //-----------
    //CurrentUser
    //------------
    this.accountService.CurrentUser.subscribe(res=>{
      //currentUser
      this.user = res;
    });
  }

  //Load -> When view  is fully initialized
  ngOnInit(){
    //call methods here
    this.initializeUploader();
  }



  //___________________
  //** SetMainPhoto **
  //===================
  setMainPhoto(photo:Photo){
    this.memberService.setMainPhoto(photo.id).subscribe(()=>{
      //::::: USER-----
      //CurrentUser Photo.Url = SELECTED PhotoUrl
      this.user.photoUrl = photo.url;

      //UPDATE CURRENT User(SubjectBehaviour + LocalStorage)
      this.accountService.setCurrentUser(this.user);

      //::::: MEMBER-------
      //Update Member
      this.member.photoUrl = photo.url;

      //Go through EACH Photo in member Photos[] collection
      //if photo IS mainPhoto => SET photo.IsMain = false
      //Else -> Find Photo with matching Id as photo.Id & SET photo.IsMain = true
      this.member.photos.forEach(p=>{
        if(p.isMain){
          p.isMain = false
        }
        if(p.id == photo.id){
          p.isMain = true;
        }
      })

    });
  }
  

   //__________________
  //** DeletePhoto **
  //===================
  //Delete Photo by photoId
  deletePhoto(photoId:number){
    this.memberService.deletePhoto(photoId).subscribe(()=>{

      //REMOVE Photo with the passedId from member.Photos[]
      //------------
      //Filter all the photos whose id dont match with passed PhotoId
      this.member.photos = this.member.photos.filter(x=>x.id !== photoId);
    })
  }



  //==============
  //FILE UPLOADER
  //==============
  fileOverBase(e:any){
    this.hasBaseDropZoneOver = e;
  }


  initializeUploader(){
    //FileUploader
    //-------------
    //uploader.(cancelAll/clearAll/uploadAll)
    this.uploader = new FileUploader({
      //API Url
      url: Global.BASE_API_PATH + "users/add-photo",
      //JWT Token
      authToken: 'Bearer '+this.user.token,

      isHTML5:true,
      allowedFileType:['image'],
      removeAfterUpload:true,
      autoUpload:false,
      maxFileSize:10*1024*1024 //10MB
    });


    //Configuration Settings
    //-----------------------
    //Already set jwt token in header
    this.uploader.onAfterAddingFile = (file)=>{
      file.withCredentials = false;
    }

    //After Upload has been successfully done
    //----------------------------------------
    this.uploader.onSuccessItem = (item,response,status,headers)=>{
      if(response){
        //Photo (JSON.Parse(string -> obj))
        const photo = JSON.parse(response);

        //Add photo to member{Photos[]}
        this.member.photos.push(photo);
      }
    }
  }
  

}
