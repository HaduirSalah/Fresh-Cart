import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartDataSubject = new BehaviorSubject<any>(0);
  cartData$ = this.cartDataSubject.asObservable();

  private headers = new HttpHeaders({
    token: localStorage.getItem('UserToken') || '',
  });
  constructor(private _HttpClient: HttpClient) { }

  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/cart',
      { productId },
      { headers: this.headers }
    );
  }

  GetLoggedUserCart(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: this.headers,
    });
  }

  RemoveSpecificCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { headers: this.headers }
    );
  }

  UpdateCartProductQuantity(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      { count },
      { headers: this.headers }
    );
  }

  CountItemsCart() {
    this.GetLoggedUserCart().subscribe({
      next: (res) => {
        if (res.status == 'success') {
          this.cartDataSubject.next(res.numOfCartItems);
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  onlinePayment(shippingAddress: any, cartId: string) {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://localhost:4200`,
      {
        shippingAddress,
      },
      {
        headers: this.headers,
      }
    );
  }
}
