

import { Component, OnInit,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
//import {faUser,faEyeSlash,faLock} from '@fortawesome/free-solid-svg-icons';
import validateForm from '../helpers/validateForm';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
//import { NavbarService } from '../services/navbar.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
 
  // lock = faLock;
  // eye = faEyeSlash;
  // user = faUser;
 
type:string ="password";
isText: boolean =false;
loginForm! : FormGroup;
toast = inject(NgToastService)
status:boolean = false;
 
  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router) {}
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      email:['',Validators.required]
    });
  }
  hideshowPass(){
    this.isText =!this.isText;
    //this.isText ? this.eye = faEyeSlash : this.eye = faEyeSlash;
    this.isText ? this.type = "text" : this.type = "password";
 
  }
  onlogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
      .subscribe({
        next: (res)=>{
          // alert(res.message)
          this.toast.success({
            detail:"Login Successful",
            summary:"Successful",
            duration:4000,
            position:"topCenter"
          })
          this.status = true; 
          this.loginForm.reset();
          this.router.navigate(['/home'])

          //exp
          // this.navbarService.setNavbarVisibility(true);
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
     //send object to datyabase
         }
    else{
      //throw error with required field
        validateForm.validateAllFormFields(this.loginForm);
        alert("Your form is invalid")
    }
  }
 
 
}