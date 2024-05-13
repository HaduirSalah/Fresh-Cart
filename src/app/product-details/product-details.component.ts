import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:string='';
  productDetails:any={};
  cartObj:any='';
  ErrorLogged:string=''
  

constructor(private _ProductService:ProductService,private _ActivatedRoute:ActivatedRoute,private _CartService: CartService){
  this.productId=_ActivatedRoute.snapshot.params['id'];
}
  ngOnInit(): void {
     this._ProductService.GetSpecialProduct(this.productId).subscribe({
          next:(data:any)=>{
            console.log(data.data);
            this.productDetails=data.data
          },
    
          error:(err)=>{
            console.log(err);
          },
          complete:()=>{
           console.log("Done");
          }
  })

}


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      // 400: {
      //   items: 2
      // },
      // 740: {
      //   items: 3
      // },
      // 940: {
      //   items: 4
      // }
    },
    nav: true
  }




  addProductToCart(productId:string) {
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhh')
    this._CartService.addToCart(this.productId).subscribe(
      {
        next: (response:any) => {

          this.cartObj=response.message;
          console.log(response)
     
        },

        error:(err:any)=>
        {
          this.ErrorLogged=err.error.message;
          console.log(err)
        }
      }
    )
  }
}
