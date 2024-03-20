

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { BookingHistoryComponent } from '../booking-history/booking-history.component';
//import { BookingHistoryService } from '../services/booking-history.service';
import { CarService } from '../services/car.service';
import { Car } from '../Model/car.model';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  carId!: number;
  selectedCar!: Car;
  startDate: string = '';
  endDate: string = '';
 
  totalPrice: number= 0;
  bookingService: any;
  

  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = +params['carId'];
      console.log("OnInit")
      this.carService.getCarById(this.carId).subscribe({
        next:(car:Car)=>{
          console.log(car)
          this.selectedCar = car;
        },
        error:(err: any)=>{
          console.error('Error fetching selected car', err)
        }
      })
     
    });
  }

  

  calculateTotalPrice(): void {
    if(this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);
      const durationInDays = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      this.totalPrice = this.selectedCar.pricePerDay * durationInDays;
    }
  }

  bookCar(): void {
    this.calculateTotalPrice();
    
  }
  

  proceedToPayment(): void {
    this.router.navigate(['/payment', this.carId, this.totalPrice, this.startDate, this.endDate]);
  }
  
}