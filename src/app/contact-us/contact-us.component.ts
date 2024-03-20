import { Component,inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastComponent, NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})



export class ContactUsComponent {

  toast = inject(NgToastService)
  router = inject(Router)



submitMessage(){
  this.toast.success({
    detail:"Message Submitted",
    summary:"Successful",
    duration:2000,
    position:"topCenter"
  })
  this.router.navigate(['/home'])
}
}
