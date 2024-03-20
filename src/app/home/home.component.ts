import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
  router= inject(Router)
  goToHome(){
    this.router.navigate(['/home'])
   }

   goToInsurance(){
    this.router.navigate(['/insurance']);
   }
   
   goTovehicleInspection(){
    this.router.navigate(['/vehicleInspection']);
   }

   goTovehicleSelection(){
    this.router.navigate(['/vehicleSelction']);
   }

   goTocontactUs(){
    this.router.navigate(['/contactUs']);
   }
}
