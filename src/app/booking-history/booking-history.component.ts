import { Component, OnInit } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { Booking } from '../Model/booking.model';
import { BookingHistoryService } from '../services/booking-history.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {
  // bookingHistory: any[] = [];
  // getBookingHistory: any;
  booking: Booking[] = [];
  loading:boolean = true;
  userName: string;

  constructor(private bookingHistoryService: BookingHistoryService) { }
 ngOnInit(): void {
   this.bookingHistoryService.getBookingHistory().subscribe(
    (bookings : Booking[]) => {
      this.booking = bookings;
      this.loading= false;
    },
    (error) => {
      console.error('eRROR fetch history', error)
      this.loading = false;
    }
   )
   this.userName = localStorage.getItem('userName')
 }
//   ngOnInit(): void {
//     this.fetchBookingHistory();
//   }

//   fetchBookingHistory(): void {
//     this.bookingService.getBookingHistory().subscribe(
//       (history: any[]) => {
//         this.bookingHistory = history;
//       },
//       (error) => {
//         console.error('Error fetching booking history:', error);
//       }
//     );
//   }
}
