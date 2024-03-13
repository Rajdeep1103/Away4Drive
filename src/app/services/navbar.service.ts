import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private isNavBarVisibileSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isNavbarVisible$: Observable<boolean> = this.isNavBarVisibileSubject.asObservable();

  constructor() { }

  setNavbarVisibility(visible: boolean): void{
    this.isNavBarVisibileSubject.next(visible);
  }
}
