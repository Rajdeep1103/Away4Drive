import { Component,inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
carId: number;
totalPrice: number;
startDate = Date ;
endDate = Date; 

toast = inject(NgToastService)
  
router = inject(Router)
constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  this.route.params.subscribe(params => {
    // ---Extract parameters from the URL
    this.carId = +params['carId'];
    this.totalPrice = +params['totalPrice'];
    this.startDate = params['startDate'];
    this.endDate = params['endDate'];
  });
}
confirmPyment(): void {
  alert('payment Successfully');
  this.router.navigate(['/confirmation']);
}
confirmPayment()
{
  this.toast.success({
    detail:"Booking Confirm",
    summary:"Confirm",
    duration:3000,
    position:"topCenter"
    
  })

  this.router.navigate(['/home'])
}

}
