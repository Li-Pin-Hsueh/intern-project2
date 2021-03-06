import { CartService } from './../cart.service';
import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products : Product[] ;
  productsOfType : Product[] ;
  productsForPage : Product[];
  currentPage: number ;


  selectedType : string ;
  countOfAllProducts : number ;
  countOfDailyProducts : number ;
  countOfHotProducts : number ;
  countOfNewProducts : number ;

  totalPage : number ;
  constructor( private productService: ProductService,
        private cartService: CartService) { }

  ngOnInit(): void {
    this.products = [];
    this.selectedType = 'all' ;

    this.productService.getProducts().
      subscribe( products => {
        // console.dir(products);
        this.products = products ;
        this.countOfAllProducts = this.products.length ;
        this.countOfDailyProducts = this.products
           .filter( product => product.type.includes('daily')).length ;
        this.countOfHotProducts = this.products
           .filter( product => product.type.includes('hot')).length ;
        this.countOfNewProducts = this.products
           .filter( product => product.type.includes('new')).length ;
        this.productsOfType = this.products ;

        if(this.products.length % 4 != 0 ) this.totalPage = Math.floor(this.products.length/4) + 1 ;
        else this.totalPage = Math.floor(this.products.length/4) ;

        this.currentPage = 1 ;

        if( this.totalPage == 1)
          this.productsForPage = this.productsOfType.slice(0, this.productsOfType.length );
        else
          this.productsForPage = this.productsOfType.slice(0, 4) ;
      });


  }

  onSelect(type: string): void {
    // change product type
    this.selectedType = type;
    this.currentPage = 1;

    // access products of the specific type
    if( type == 'all') this.productsOfType = this.products ;
    else {
      //this.productService.getProductsByType(type)
      //  .subscribe( products => this.productsOfType = products ) ;
      this.productsOfType = this.getProductsByType( type );
    }

    // refresh display panel
    if(this.productsOfType.length % 4 != 0 ) this.totalPage = Math.floor(this.productsOfType.length/4) + 1 ;
    else this.totalPage = Math.floor(this.productsOfType.length/4) ;
    // console.log(this.productsOfType);

    // create a slice of products to show
    if( this.totalPage == 1)
      this.productsForPage = this.productsOfType.slice(0, this.productsOfType.length );
    else
      this.productsForPage = this.productsOfType.slice(0, 4) ;


  }

  getProductsByType( type : string ){

    const products = [];

    return this.products.filter( product =>
      product.type.includes(type)
      );
  }

  changePage( p : number ) {
    this.currentPage = p ;

    // change the data prepared to show
    this.productsForPage = this.productsOfType.slice( (p-1)*4, (p-1)*4+4 );
  }

  addToCart(product) {
    this.cartService.addToCart(product) ;
  }



}
