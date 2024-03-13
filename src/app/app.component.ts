import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Away4Drive';
  router = inject(Router);

  toLogin(){
    this.router.navigate(['/login'])
  }

}
