import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart.service';
import { AuthService } from './../auth.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  NumOfItemCart: any = 0;

  constructor(
    private _AuthService: AuthService,
    public _CartService: CartService,
    private _translateService: TranslateService
  ) {
    _AuthService.userData.subscribe({
      next: () => {
        if (_AuthService.userData.getValue() !== null) {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
    });
  }
  ngOnInit(): void {
    // this._CartService.GetLoggedUserCart().subscribe({
    //   next: (res) => {
    //     if (res.status == 'success') {
    //       this.NumOfItemCart = res.numOfCartItems;
    //       console.log(res.data.products);
    //     }
    //   },

    //   error: (err) => {
    //     console.log(err);
    //   },

    //   complete: () => {
    //     console.log('Done Req');
    //   }
    // })

    this._CartService.cartData$.subscribe({
      next: (data) => {
        this.NumOfItemCart = data.numOfCartItems;
        console.log('cartData$');
        console.log(data);
        console.log(data.numOfCartItems);
      },
    });

    // Call the service to initially load the cart data
    this._CartService.CountItemsCart();
  }

  logOut() {
    this._AuthService.Logout();
  }

  translate(event: any) {
    this._translateService.use(event.target.value);
  }
}
