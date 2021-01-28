import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AppComponent } from "./app.component";
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'cart', component: CartComponent},
  { path: 'cart/checkout', component:CheckoutComponent},
  { path: 'cart/checkout-2', component:CheckoutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
