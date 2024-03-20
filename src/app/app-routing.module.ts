import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutComponent } from './about/about.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { VehicleInspectionComponent } from './vehicle-inspection/vehicle-inspection.component';
import { VehicleSelectionComponent } from './vehicle-selection/vehicle-selection.component';
import { ContactUsComponent } from './contact-us/contact-us.component';






const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'home', component: HomeComponent},
  {path:'cars',component:CarListComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'booking/:carId', component: BookingComponent},
  {
    path:'error',
    component:NotFoundComponent
  },
  {path: 'payment/:carId/:totalPrice/:startDate/:endDate', component: PaymentComponent},
  { path:'about' , component: AboutComponent},
  {path: 'booking-history' , component: BookingHistoryComponent},
  {path : 'car-details/:carId', component: CarDetailsComponent},
  {path :'insurance', component: InsuranceComponent},
  {path:'vehicleInspection', component: VehicleInspectionComponent },
  {path: 'vehicleSelction', component: VehicleSelectionComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path:'**', redirectTo: '/error', pathMatch:'full'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
