import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  isLoading: boolean = false;
  apiError: string = '';
  constructor(private _CartService: CartService) {

  }
  cashOrderForm = new FormGroup({

    details: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required,]),
    city: new FormControl(null, [Validators.required,])

  });

  navigateToPage(url: string) {
    window.location.href = url;
  }
  SubmitCashOrderForm(cashOrderForm: FormGroup) {
    this.isLoading = true;
    console.log('cashOrderForm');
    if(cashOrderForm.valid) //true
    {
    this._CartService.onlinePayment(cashOrderForm.value, '6636386ed9d7660275904713').subscribe({
      next: (response:any) => {

        // console.log('calllapiiiiiiiiiiiiiiii');
        this.isLoading = false;
        console.log(response);
        console.log(response.session.url);
        this.navigateToPage(response.session.url);
      },

      error: (err) => {
        console.log(err);
        console.log(err.error.errors.msg);
        this.isLoading = false;
        this.apiError = err.error.errors.msg;
      }
    })
    // }
    //console.log(cashOrderForm.value);
  }
  }}