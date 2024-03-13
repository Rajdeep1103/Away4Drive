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
//import { PaymentComponent } from ''
import { AboutComponent } from './about/about.component';
//import { FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { NgToastModule } from 'ng-angular-popup';
//import { CarSearchComponent } from './car-search/car-search.component';


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
