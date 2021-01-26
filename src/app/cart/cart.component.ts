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
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getItems();
    console.log(this.products) ;
  }

  getItems() {
    this.products = this.cartService.getItems();
  }

}
