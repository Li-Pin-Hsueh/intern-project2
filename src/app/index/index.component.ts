import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  topItems : Product[];

  selectedType = 'daily'

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsByType(this.selectedType);
  }

  getProductsByType( type: string ) : void {
    this.selectedType = type ;
    // get topItems through productsService
    this.productService.getTopItems(type)
        .subscribe( products => this.topItems = products );

    console.log(this.topItems) ;
  }

}
