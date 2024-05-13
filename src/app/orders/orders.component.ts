import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  isLoading: boolean = false;
  apiError: string = '';
  orders: any[] = []; // Array to hold user orders
  userID:any;
  user:any;
  constructor(private _OrdersService: OrdersService,private _ActivatedRoute:ActivatedRoute,private _LoginService:AuthService) { }

  ngOnInit(): void {
    this.user = this._LoginService.userData.getValue();
    console.log('this.userrrrr');
    console.log(this.user);
    this._ActivatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = params.get("id");
      if (id) {
        this.userID = id;
        this.getUserOrders();
      } else {
        console.error("No user ID found in route parameters.");
      }
    });
  }
  

  getUserOrders() {
    if (!this.userID) {
      console.error("No user ID available.");
      return;
    }
  
    this.isLoading = true; // Set loading state to true
    this._OrdersService.getUserOrders(this.userID).subscribe({
      next: (data) => {
        console.log("orderssss");
        console.log(data);
        this.orders = data; // Assign fetched orders to the orders array
      },
      error: (err) => {
        console.log(err);
        this.apiError = err.message; // Set error message
        this.isLoading = false; // Set loading state to false
      },
      complete: () => {
        console.log('Done');
        this.isLoading = false; // Set loading state to false
      },
    });
  }
  
}

