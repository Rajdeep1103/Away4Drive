// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-insurance',
//   templateUrl: './insurance.component.html',
//   styleUrl: './insurance.component.css'
// })
// export class InsuranceComponent {

// }



import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent {
  insurancePlans: { title: string, description: string }[] = [
    {
      title: 'Comprehensive Insurance',
      description: 'Provides coverage for damage to the rental vehicle, theft, and third-party liability.'
    },
    {
      title: 'Collision Damage Waiver (CDW)',
      description: 'Reduces the renter’s liability for damage to the rental vehicle in case of an accident.'
    },
    {
      title: 'Loss Damage Waiver (LDW)',
      description: 'Covers the cost of repairing or replacing the rental vehicle in case of theft or damage.'
    },
    // Add more insurance plans as needed
  ];
}