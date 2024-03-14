// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CarService } from '../services/car.service';


// import { Car } from '../Model/car.model';



// @Component({
//   selector: 'app-car-list',
//   templateUrl: './car-list.component.html',
//   styleUrl: './car-list.component.css'
// })
// export class CarListComponent implements OnInit {

//   availableCars: Car[] = [];
  
  

//   constructor(private carService: CarService, private router : Router) {}

//   ngOnInit(): void {
//     this.carService.getAvailableCars().subscribe(
//       {
//         next:(res)=>{
//           console.log("goodmorning");
//           this.availableCars = res.map(car => ({...car, isBooked: false}))
//           console.log(this.availableCars)
//         },
//         error:(err)=>{
//           console.error('Error fetching available cars', err)
//         }
//       }
//     )
    
//   } 


//   bookCar(car: Car): void {
//     console.log("good mornung")
//     this.router.navigate(['/booking', car.carId]);
//   }
  
// }







import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../Model/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  availableCars: Car[] = [];
  filteredCars: Car[] = [];
  searchQuery: string = '';

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.carService.getAvailableCars().subscribe(
      {
        next: (res) => {
          this.availableCars = res.map(car => ({ ...car, isBooked: false }));
          this.filteredCars = [...this.availableCars];
        },
        error: (err) => {
          console.error('Error fetching available cars', err);
        }
      }
    );
  }

  bookCar(car: Car): void {
    this.router.navigate(['/booking', car.carId]);
  }

  searchCars(event: Event): void {
    event.preventDefault();
    this.filteredCars = this.availableCars.filter(car => 
      car.brand.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}


