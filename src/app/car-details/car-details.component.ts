import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';
import { Car } from '../Model/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent {
   @Input() car: any;

   constructor( private route: ActivatedRoute, private carService: CarService) {}
   
  ngOnInit(): void {
    const carId = +this.route.snapshot.paramMap.get('id');

    this.carService.getCarById(carId).subscribe((car: Car) => {
      this.car= car;
    })

   
  } 

}

