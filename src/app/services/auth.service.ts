import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl: string = "https://localhost:7226/api/User"
  router: any;
  loggedIn: any;
  userLoginStatus = new BehaviorSubject<boolean>(false);
  private currentUserSubject:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public currentUser: Observable<any> = this.currentUserSubject.asObservable();
  //new
  // private userLoginStatus = new BehaviorSubject<boolean>(false);
  // private userName = new BehaviorSubject<string>('');
  //end
   constructor(private http: HttpClient) {
    // const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    // if(userData) {
    //  this.setUserData(userData);
    // }
    }
  
   
  
 
  signup(userObj:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`,userObj);
  }
 
  login(loginObj:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`,loginObj);
  }

  setUserLoginStatus(value:boolean):void{
    this.userLoginStatus.next(value);
  }

  getUserLoginStatus():Observable<boolean>{
    return this.userLoginStatus.asObservable();
  }
  //new
  // setUSerName(name:string): void{
  //   this.userName.next(name);
  // }

  // getUserName(): Observable<string> {
  //   return this.userName.asObservable();
  // }


  logout():void{
    this.setUserLoginStatus(false);
  }
  //new
  // login(loginObj:any): Observable<any> {
  //   return this.http.post<any>('${this.baseUrl/user', loginObj).pipe(
  //     tap((response) => {
  //       this.setUserLoginStatus(true);
  //       this.setUSerName(response);
  //     })
  //   )
  // }
  
  // logout(): void {
  //   this.setUserLoginStatus(false);
  //   this.setUserData({});
  //   this.router.navigate(['/login']);
  // }

  // private setUserData(userData: any): void {
  //   localStorage.setItem('userData', JSON.stringify(userData));
  //   this.setUSerName(userData.userName || '');
  // }
  //new

}

