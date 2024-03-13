// import { FormBuilder , FormGroup, Validators,FormControl } from '@angular/forms';
// import { Component } from '@angular/core';
// import validateForm from '../helpers/validateForm';
// import { AuthService } from '../services/auth.service';
// import { Router } from '@angular/router';
//import {faEyeSlash,faUser,faLock,faEnvelop} from '@fortawesome/free-soild-svg-icions';
//import { AuthService } from '../../services/auth.service';



// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.css'
// })
// export class SignupComponent {

  //eye = faEyeSlash;
  //lock = false;
  //user = faUser;
  // type: string ="password";
  // isText: boolean = false;
  //eyeIcon: string = "fa-eye-slash";
  // signUpForm!: FormGroup;
  // constructor(private fb:FormBuilder, private auth:AuthService, private router: Router){

  // }
   
  // ngOnInit(): void{
  //   this.signUpForm = this.fb.group({
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
  //     username: ['', Validators.required],
  //     email: ['', Validators.required],
  //     password: ['', Validators.required]
  //   })
  // }

  // hideShowPass(){
  //   this.isText = !this.isText;
    //this.isText ? this.eye = "fa-eye" : this.eye = "fa-eye-slash";
  //   this.isText ? this.type = "text" : this.type = "password";
  // }
  // onSignup(){
  //   if(this.signUpForm.valid){
  //      //perform logiv for signup
  //     console.log(this.signUpForm.value)
  //   }else{
  //      //logic for throwing error
  //      validateForm.validateAllFormFields(this.signUpForm)
  //   }
  // }
  // onSignUp(){
  //   if(this.signUpForm.valid){
 
  //     console.log(this.signUpForm.value);
 
      //send obj to database
      // this.auth.signUp(this.signUpForm.value)
      // .subscribe({
      //   next:(res=>{
          // alert(res.message);
    //       this.signUpForm.reset();
    //       this.router.navigate(['login']);
    //     }),
    //     error:(err=>{
    //       alert(err?.error.message)
    //     })
    //   })
    // }
    // else{
      //throw error using toaster
//       validateForm.validateAllFormFields(this.signUpForm);
//     }
//   }
// }


import { Component, OnInit,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//import {faUser,faEyeSlash,faLock} from '@fortawesome/free-solid-svg-icons';
import validateForm from '../helpers/validateForm';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  // lock = faLock;
  // eye = faEyeSlash;
  // user = faUser;
signUpForm!: FormGroup;
type:string ="password";
isText: boolean =false;
toast = inject(NgToastService)
 
  constructor(private fb: FormBuilder, private auth:AuthService,private router: Router) {}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username :['',Validators.required],
      email :['',Validators.required],
      password :['',Validators.required]
    })
  }
  hideshowPass(){
    this.isText =!this.isText;
   // this.isText ? this.eye = faEyeSlash : this.eye = faEyeSlash;
    this.isText ? this.type = "text" : this.type = "password";
 
  }
  onsignup(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);
      this.auth.signup(this.signUpForm.value)
      .subscribe({
        next:(res => {
          // alert(res.message);
          this.toast.success({
            detail:"User Registered",
            summary:"Successfull",
            duration:4000,
            position:"topCenter"
          })
          // console.log(res);
        this.signUpForm.reset();
       this.router.navigate(['/login']);
        }),
        error:(err) => {
          alert(err?.error.message)
        }
      })
    }else{
   validateForm.validateAllFormFields(this.signUpForm);
   alert("signup is required");
 
    }
  }
 
 
}