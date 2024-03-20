import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CarListComponent } from './car-list/car-list.component';
import { BookingComponent } from './booking/booking.component';

import { AboutComponent } from './about/about.component';

import { PaymentComponent } from './payment/payment.component';
import { NgToastModule } from 'ng-angular-popup';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { VehicleInspectionComponent } from './vehicle-inspection/vehicle-inspection.component';
import { VehicleSelectionComponent } from './vehicle-selection/vehicle-selection.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    CarListComponent,
    BookingComponent,
    PaymentComponent,
    AboutComponent,
    BookingHistoryComponent,
    CarDetailsComponent,
    NotFoundComponent,
    InsuranceComponent,
    VehicleInspectionComponent,
    VehicleSelectionComponent,
    ContactUsComponent    
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgToastModule
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
