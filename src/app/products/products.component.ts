import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  ListProducts:any[]=[];
  searchTerm:string=''


  constructor(private _ProductService: ProductService) {}

  ngOnInit() {
    this.AllProducts();
  }
  AllProducts() {
    this._ProductService.GetAllProducts().subscribe({
      next: (data) => {
        this.ListProducts=data.data;
        console.log(data.data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Done');
      },
    });
  }
}
