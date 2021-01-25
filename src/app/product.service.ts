import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Product } from "./product";
import { PRODUCTS } from "./mock-products";
import { Observable, of } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(  ) { }

  getProducts( ): Observable<Product[]> {

    return of(PRODUCTS) ;
  }
}
