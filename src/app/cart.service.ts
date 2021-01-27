import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = [] ;
  constructor() { }

  addToCart(product) {

    if( this.products.find( p => p.id == product.id ))
    {
      alert("Product have been in the cart.")
    }
    else {
      this.products.push(product);
    }

    console.log(this.products.length);
  }

  getProducts() {
    return this.products ;
  }
}
