import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  products : Product[];
  topProducts : Product[];
  selectedType = 'daily'

  constructor(private productService: ProductService,
        private cartService : CartService) { }

  ngOnInit(): void {
    //this.getProductsByType(this.selectedType);
    // this.productService.getProducts()
    //   .subscribe( p => this.products = p);
    // this.products = PRODUCTS;
    this.productService.getProducts()
      .subscribe( p => {
        this.products = p ;
        this.getTopProducts(this.selectedType);
      })
    // this.getTopProducts(this.selectedType);
  }

  getTopProducts( type: string ) : void {

    this.selectedType = type ;
    let count = 0 ;
    this.topProducts = [];

    for( let index=0; index < this.products.length ; index ++){
      if( this.products[index].type.includes(type) ){
        this.topProducts.push(this.products[index]) ;
        count ++ ;
        if(count == 3) break ;
      }
    }


    //console.log(this.topProducts) ;
  }

  addToCart(product) {
    this.cartService.addToCart(product) ;
  }


}
