import { Component, OnInit,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
 
signUpForm!: FormGroup;
type:string ="password";
isText: boolean =false;
toast = inject(NgToastService)
 
  constructor(private fb: FormBuilder, private auth:AuthService,private router: Router) {}
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      // username :['',Validators.required],
      // email :['',Validators.required],
      // password :['',Validators.required]

      username: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]]
    })
  }
  hideshowPass(){
    this.isText =!this.isText;
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