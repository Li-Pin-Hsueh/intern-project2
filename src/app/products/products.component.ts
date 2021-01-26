import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] ;
  countOfAllProducts : number ;
  countOfDailyProducts: number ;
  countOfHotProducts: number ;
  countOfNewProducts: number ;

  selectedType : string ;

  constructor( private productService: ProductService) { }

  ngOnInit(): void {

    this.selectedType = 'all' ;

    this.productService.getProducts().
      subscribe( products => this.products = products);

    this.countOfAllProducts = this.products.length ;

    this.countOfDailyProducts = this.products
    .filter( product => product.type.includes('daily')).length ;

    this.countOfHotProducts = this.products
    .filter( product => product.type.includes('hot')).length ;

    this.countOfNewProducts = this.products
    .filter( product => product.type.includes('new')).length ;
  }

  onSelect(type: string): void {
    this.selectedType = type;
    console.log("selected type: ", type) ;
  }

}
