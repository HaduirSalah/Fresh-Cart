import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  ListCategory :any[]=[];
constructor(private _ProductService:ProductService)
{


}
  ngOnInit(): void {
  this._ProductService.GetAllCategories().subscribe({
    next:(data)=>
    {
      this.ListCategory=data.data
      console.log(data.data)
    },
    error:(err)=>
    {
      console.log(err)
    }
    ,
    complete:()=>
    {
      console.log('Done')
    }
  })
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 6
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
}
