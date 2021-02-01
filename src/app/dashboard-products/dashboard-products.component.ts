import { DashboardService } from './../dashboard.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.css']
})
export class DashboardProductsComponent implements OnInit {

  products : Product[];
  ifAdd = false ;
  ifDelete = false ;
  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    inventory: new FormControl('', Validators.required),
  })
  constructor(private productService : ProductService, private dashboardService : DashboardService) { }

  ngOnInit(): void {
    this.productService.getProducts().
      subscribe( products => {
        this.products = products ;
    });


  }

  addEvent() {
    this.ifAdd = true ;
  }


  onSubmit() {

    var formData: any = new FormData();
    formData.append("name", this.addForm.get('name').value);
    formData.append("price", this.addForm.get('price').value);
    formData.append("inventory", this.addForm.get('inventory').value);

    this.ifAdd = false ;

    this.dashboardService.post(formData);

  }

  onDelete() {
    this.ifDelete = true ;
  }

  postDelete(id : number, index: number) {
    this.dashboardService.delete(id) ;
    this.products.splice(index, 1);
  }

  doneDelete() {
    this.ifDelete = false ;
  }

}
