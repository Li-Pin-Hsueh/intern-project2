import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Product } from "./product";
import { PRODUCTS } from "./mock-products";
import { Observable, of ,throwError } from 'rxjs' ;
// httpclient
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/';  // URL to web api
  constructor( private http: HttpClient ) { }


  getProducts( ): Observable<Product[]> {
    //return of(PRODUCTS) ;
    const url = this.baseUrl + "products" ;
    return this.http.get<Product[]>(url, {responseType:'json'}) ;
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
