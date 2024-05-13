import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  CartProducts: any[] = [];
  NumOfItemCart: number = 0;
  totalCartPrice: number = 0;
  createdAt: string = '';
  updatedAt: string = '';

  constructor(
    private _CartService: CartService,
    private toastr: ToastrService
  ) {
    //  this.GetLoggedUserCart();
  }
  ngOnInit(): void {
    this._CartService.GetLoggedUserCart().subscribe({
      next: (res) => {
        if (res.status == 'success') {
          localStorage.setItem('CountItemCart', res.numOfCartItems);
          this.CartProducts = res.data.products;
          this.NumOfItemCart = res.numOfCartItems;
          this.totalCartPrice = res.data.totalCartPrice;
          this.createdAt = res.data.createdAt;
          this.updatedAt = res.data.updatedAt;
          console.log(res.data);
        }
      },

      error: (err) => {
        console.log(err);
      },

      complete: () => {
        console.log('Done Req');
      },
    });
  }

  RemoveSpecificCartItem(productId: string) {
    this.toastr.success('Deleted Successfully ! ');
    this._CartService.RemoveSpecificCartItem(productId).subscribe({
      next: (res) => {
        this.CartProducts = res.data.products;
        this.totalCartPrice = res.data.totalCartPrice;
        this.createdAt = res.data.createdAt;
        this.updatedAt = res.data.updatedAt;
        this.NumOfItemCart = res.numOfCartItems;
        console.log('Deletee');
        console.log(res);
      },

      error: (err) => console.log(err),
    });
  }

  UpdateCartProductQuantity(productId: string, count: number) {
    this._CartService.UpdateCartProductQuantity(productId, count).subscribe({
      next: (res) => {
        // this.CartProducts = res.data;
        this.CartProducts = res.data.products;
        this.totalCartPrice = res.data.totalCartPrice;
        this.createdAt = res.data.createdAt;
        this.updatedAt = res.data.updatedAt;
        this.NumOfItemCart = res.numOfCartItems;
        console.log(res.data);
      },

      error: (err) => console.log(err),
    });
  }
}
