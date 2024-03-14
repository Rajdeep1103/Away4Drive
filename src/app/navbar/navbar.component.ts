import { Component,inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { WishlistService } from '../services/wishlist.service';
// import { AuthService } from '../services/auth.service';
//import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  ;
  

  // isNavbarVisible: boolean = true;

  //router = inject(Router)
  // WishlistService: any;
  // wishlistItemCount: any;

  // constructor(private navbarService: NavbarService){}

  constructor(private router: Router) {}

 

  ngOnInit(): void{
    // this.navbarService.isNavbarVisible$.subscribe((isVisible)=>{
    //   this.isNavbarVisible = isVisible;
    // });
    // this.wishlistService.wishlistItems$.subscribe((wishlistItems) => {
    //   this.wishlistItemCount = wishlistItems.length;
    // });
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

  
}
