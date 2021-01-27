import { CartService } from './../cart.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : Product[] ;
  counter : number[] ;
  totalPrice : number ;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
    this.counter = [].constructor(this.products.length) ;
    console.log(this.products) ;
  }

  getProducts() {
    this.products = this.cartService.getProducts();
  }



}
