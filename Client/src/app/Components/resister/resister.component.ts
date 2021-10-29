import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { Global } from 'src/app/Shared/global';
import { AccountService } from 'src/app/Shared/_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MustMatchValidator } from 'src/app/Shared/validation.validators';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-resister',
  templateUrl: './resister.component.html',
  styleUrls: ['./resister.component.css']
})
export class ResisterComponent implements OnInit {
 
  //FormGroup Instance
  registerForm:FormGroup;

  //ngxBootstrap datePicker config
  bsConfig:Partial<BsDatepickerConfig> = {
    containerClass:'theme-red',
    dateInputFormat:'DD MMM YYYY'
  }
  
  //Model
  /*model:any = {
    username:"",
    password:""
  };*/


  //OUTPUT Data to HomeComponent(Child->Parent)
  //sending CancelNotification -> to set registerMode=false
  //use EventEmitter() to emit value in Cancel() method
  @Output() CancelRegister = new EventEmitter(); 
  
  //AccountService(Dependency Injection),ToastrService
  //FormBuilder obj
  constructor(private accountService:AccountService,private toastr:ToastrService,private _fb:FormBuilder) { }

  ngOnInit(): void {
    //form
    this.formData();
  }

  //=========
  //Register
  //=========
  register(){
    console.log("VALUES: "+JSON.stringify(this.registerForm.value));
  }
  
  
  
  
  /*register(){
   this.accountService.register(this.model).subscribe(res =>{
    //res - register form data 
    //console.log(res);

    //Toastr Notification
    this.toastr.success("Registerd Successfully!");

    //Move to HomePage after Registration
    this.cancel();
   },error=>{
     //console.log(error);

     //Toastr Notification
     this.toastr.error(error.error);
   })
  }*/


  //________
  // Cancel
  //========
  cancel(){
    //console.log("Registration Cancelled!");
    //Emit value using eventEmitter
    this.CancelRegister.emit(false);
  }


  //======
  //FORM 
  //======
  formData(){
    this.registerForm = this._fb.group({
      //username
      username:['', Validators.compose([Validators.required])],
      //knownAs
      knownAs:['',Validators.compose([Validators.required])],
      //gender(radio button)
      gender:['',Validators.compose([Validators.required])],
      //dateOfBirth
      dateOfBirth:['',Validators.compose([Validators.required])],
      //Address
      city:['',Validators.compose([Validators.required])],
      country:['',Validators.compose([Validators.required])],

      //Password & confirmPassword
      password:['', Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(18)])],
      confirmPassword:['', Validators.compose([Validators.required])]
    },{

      //Custom Password validator 
      //Check if password & confirmPassword matches?
      ////use as: this.form.controls.confirmPassword.mustMatch
      validators:MustMatchValidator('password','confirmPassword')
    });
  }

  //Getter method for registerForm
  //Getter method => use directly on template
  get f(){
    return this.registerForm.controls;
  }
}
