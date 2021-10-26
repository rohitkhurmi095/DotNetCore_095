import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/Shared/_models/member';
import { MemberService } from 'src/app/Shared/_services/member.service';
//NgxPhotoGallery
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

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

  //PHOTO GALLERY (Ngx-Gallery Module)
  //==============--------------------
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


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


    //------------------
    //Ngx Photo Gallery
    //------------------
    //PhotoGalleryOptions
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent:100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      },
    ];

  }

  //PhotoGalleyImages (member.Photos)
  //Set photos from (member.photos[]) -> imageUrls[]
  getImages():NgxGalleryImage[]{
      const imageUrls = [];
      for(const photo of this.member.photos){
        imageUrls.push({
          small: photo?.url,
          medium:photo?.url,
          big: photo?.url
        });
      }
      return imageUrls;
  } 
  

  //=================---------
  //Get User by name (Member)
  //=================---------
  getMember(username:string){
    this.memberService.getMember(username).subscribe(res=>{
      this.member = res;

      //load photoImage gallery when member is loaded
      //PhotoGalleryImages
      this.galleryImages = this.getImages();
    });
  }
}
