import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';
//import { WishlistService } from '../services/wishlist.service';

import { Car } from '../Model/car.model';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {
 // // [x: string]: any;
  availableCars: Car[] = [];
  // wishlistService: any;
  

  constructor(private carService: CarService, private router : Router) {}

  ngOnInit(): void {
    this.carService.getAvailableCars().subscribe(
      {
        next:(res)=>{
          console.log("goodmorning");
          this.availableCars = res.map(car => ({...car, isBooked: false}))
          console.log(this.availableCars)
        },
        error:(err)=>{
          console.error('Error fetching available cars', err)
        }
      }
    )
    
  } 


  bookCar(car: Car): void {
    console.log("good mornung")
    this.router.navigate(['/booking', car.carId]);
  }
  

  // addToWishlist(car: Car): void {
  //   console.log('Adding to wishlist', car);
  //   this.router.navigate(['/wishlist']);
  // }

  

  

}






