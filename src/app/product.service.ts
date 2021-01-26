import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Product } from "./product";
import { PRODUCTS } from "./mock-products";
import { Observable, of } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = PRODUCTS ;


  constructor(  ) { }

  getProducts( ): Observable<Product[]> {

    return of(this.products) ;
  }

  getTopItems( type: string ) : Observable<Product[]> {
    const topItems = [];
    let count = 0 ;

    for( let index=0; index < this.products.length ; index ++){
      if( this.products[index].type.includes(type) ){
        topItems.push(this.products[index]) ;
        count ++ ;
        if(count == 3) break ;
      }
    }
    return of(topItems);

  }
}
