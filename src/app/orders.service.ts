import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _HttpClient:HttpClient) { }

  
  private headers = new HttpHeaders({

    token: localStorage.getItem('UserToken') || ''
  })


  getUserOrders(userID:any):Observable<any[]>
  {
    return this._HttpClient.get<any[]>(`https://ecommerce.routemisr.com/api/v1/orders/user/${userID}`)
  }
 
  
}
