import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null);
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('UserToken') !== null) {
      this.DecodeJWT();
    }
  }


  DecodeJWT() {
    let EncodedToken = JSON.stringify(localStorage.getItem('UserToken'));  // get token from local storage and convert it to string
    let DecodedToken: any = jwtDecode(EncodedToken);               // Decoded Token  using JWT-Decode     
    console.log(DecodedToken);
    this.userData.next(DecodedToken);                   // store json obj in var user data
  }


  Register(UserData: object): Observable<any> {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', UserData);
  }

  Login(UserData: object): Observable<any> {
    return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', UserData);
  }

  Logout() {
    localStorage.removeItem('UserToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}


// https://documenter.getpostman.com/view/5709532/2s93JqTRWN