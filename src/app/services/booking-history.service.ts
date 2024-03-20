import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingHistoryService {
   private baseUrl: string = "https://localhost:7226/api/Booking/user";
  constructor( private http: HttpClient) {
   }
  //  storeBooking(bookingData:any) {
  //   return this.http.post<any>('${this.baseUrl}/store', bookingData)
  //  }
   getBookingHistory(): Observable<any> {
    return this.http.get<any>('${this.baseUrl}/booking/history');
  }
}
