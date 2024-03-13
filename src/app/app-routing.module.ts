import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';





const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'home', component: HomeComponent},
  {path:'cars',component:CarListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'booking/:carId', component: BookingComponent},
  {path: 'payment/:carId/:totalPrice/:startDate/:endDate', component: PaymentComponent},
  { path:'about' , component: AboutComponent},
  

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
