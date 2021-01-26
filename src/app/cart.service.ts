import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [] ;
  itemsCount = 0 ;
  constructor() { }

  addToCart(product) {
    this.items.push(product);
    this.itemsCount += 1 ;
    console.log(this.itemsCount);
  }

  getItems() {
    return this.items ;
  }
}
