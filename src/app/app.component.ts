import { CartService } from './cart.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from "./product";
import { ProductService } from './product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-app';

  constructor( private productService : ProductService
    , private cartService: CartService ){}

  ngOnInit() : void {
  }

  addCart( ) : void {
    this.cartService.addToCart('test') ;
  }


}
