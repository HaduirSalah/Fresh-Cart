import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';   // ! popular Observable library called RxJS
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }

  GetAllProducts():Observable<any>
  {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  GetSpecialProduct(ProdId:string)
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${ProdId}`);
  }

  GetAllCategories():Observable<any>
  {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories');
  }
}
