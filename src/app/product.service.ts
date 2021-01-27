import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Product } from "./product";
import { PRODUCTS } from "./mock-products";
import { Observable, of } from 'rxjs' ;
// httpclient
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products';  // URL to web api
  constructor( private http: HttpClient ) { }

  getProducts( ): Observable<Product[]> {
    //return of(PRODUCTS) ;
    return this.http.get<Product[]>(this.productsUrl) ;
  }

  getTopItems( type: string ) : Observable<Product[]> {
    const topItems = [];
    let allProducts = [];
    let count = 0 ;

    this.getProducts()
      .subscribe( p => allProducts = p );

    // for( let index=0; index < PRODUCTS.length ; index ++){
    //   if( PRODUCTS[index].type.includes(type) ){
    //     topItems.push(PRODUCTS[index]) ;
    //     count ++ ;
    //     if(count == 3) break ;
    //   }
    // }

    for( let index=0; index < allProducts.length ; index ++){
      if( allProducts[index].type.includes(type) ){
        topItems.push(allProducts[index]) ;
        count ++ ;
        if(count == 3) break ;
      }
    }
    return of(topItems);

  }

  /*
  getProductsByType( type: string ) : Observable<Product[]> {
    const products = [];

    return of(this.products.filter( product =>
      product.type.includes(type)
      ));
  } */
}
