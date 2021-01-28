import { Product } from './../product';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgControlStatus } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products = [] ;
  counter = [] ;
  profileForm = new FormGroup({
    lastName: new FormControl('', Validators.required), //姓
    firstName: new FormControl('', Validators.required), //名
    city: new FormControl('', Validators.required) ,
    dist: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  })

  constructor( private cartService : CartService ) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
    this.counter = this.cartService.getCounter() ;
  }

  getCounter() {
    this.counter = this.cartService.getCounter();
  }

  getPrice() {
    return this.cartService.getPrice();
  }

  getTansportFee() {
    return this.cartService.transportFee ;
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice() ;
  }



  onSubmit() {
    //console.log(this.profileForm.value)
    this.cartService.enpacData(this.profileForm.value);
  }
}
