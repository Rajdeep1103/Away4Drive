import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Car} from '../Model/car.model'

//import { Car } from '../car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  searchCarsByModel(searchModel: string) {
    throw new Error('Method not implemented.');
  }
  getUserWishlist():Observable<any> {
    
    throw new Error('Method not implemented.');
  }
  getCarById(carId: number):Observable<any> {
    return this.http.get<any>(`https://localhost:7226/api/Car/${carId}`)
   
  }
  private apiUrl = 'https://localhost:7226/api/Car';

  constructor(private http: HttpClient) { }

  getAvailableCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/available`);
  }

  getCarsWithPricePerDay(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.apiUrl}/with-price-per-day`);
  }

  addToWishlist(car: number): Observable<any> {
     
    const userId = 1;
    return this.http.post<any>('${this.baseUrl}/users/${userId}', { car });
  }
  
}





