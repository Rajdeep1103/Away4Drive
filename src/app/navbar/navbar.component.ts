import { Component,inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  status:boolean = false;
  userName: any;
  constructor(private router: Router) { 
    
  }
  toast = inject(NgToastService)
 authService = inject(AuthService);

 

  ngOnInit(): void{
  
    this.authService.getUserLoginStatus().subscribe({
      next: (userLoginStatus)=> {this.status = userLoginStatus
      console.log(this.status)}
    })
    this.authService.getUserLoginStatus().subscribe(status => {
      this.status = status;
    })
   
  }
  



  goToHome(){
    this.router.navigate(['/home'])

  }

  goToSignup(){
    this.router.navigate(['/signup'])

  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

  goToCar(){
    this.router.navigate(['/cars'])
  }
  goToAbout(){
    this.router.navigate(['/about'])
  }

  logout(){
    this.status = false;
    this.toast.success({
      detail:"Logged Out",
      summary:"Successful",
      duration:2000,
      position:"topCenter"
    })
    this.router.navigate(['/login']);
  }
}

