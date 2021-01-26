import { Product } from './../product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input()
  productsToDisplay : Product[] ;
  @Input()
  totalPage: number ;
  @Input()
  showType: string ;

  productsForPage : Product[];
  currentPage: number ;

  constructor() { }

  ngOnInit(): void {
    this.currentPage = 1 ;
    /*
    if( this.productsToDisplay.length % 4 != 0 )
      this.totalPage = Math.floor( this.productsToDisplay.length / 4 ) + 1;
    else
      this.totalPage = Math.floor( this.productsToDisplay.length / 4 ) ;
    */
    console.log(this.productsToDisplay);
    this.productsForPage = this.productsToDisplay ;

    if( this.totalPage == 1)
      this.productsForPage = this.productsToDisplay.slice(0, this.productsToDisplay.length );
    else
      this.productsForPage = this.productsToDisplay.slice(0, 4) ;
  }

  changePage( p : number ) {
    this.currentPage = p ;

    this.productsForPage = this.productsToDisplay.slice( (p-1)*4, (p-1)*4+4 );
  }

}
