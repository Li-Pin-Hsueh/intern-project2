import { Product } from './../product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @Input()
  topItems : Product[];

  selectedType = 'daily'

  constructor() { }

  ngOnInit(): void {
  }

  getProductsByType( type: string ) : void {
    this.selectedType = type ;
    // get topItems through productsService
  }

}
