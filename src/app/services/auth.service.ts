import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl: string = "https://localhost:7226/api/User"
  router: any;
  loggedIn: any;
  constructor(private http: HttpClient) { }
  
 
  signup(userObj:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`,userObj);
  }
 
  login(loginObj:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`,loginObj);
  }

  

}

