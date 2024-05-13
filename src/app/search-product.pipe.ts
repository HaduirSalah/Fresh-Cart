import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(ProductList:any[],SearchTerm:string): any[] {
    return ProductList.filter((product)=>
    // product.title.toLocaleLowerCase().includes(SearchTerm.toLocaleLowerCase()))
    product.title.toLocaleLowerCase().includes(SearchTerm.toLocaleLowerCase()))
    
  }

}
