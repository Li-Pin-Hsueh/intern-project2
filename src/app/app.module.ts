import { CartService } from './cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
// HttpClient
import { HttpClientModule } from '@angular/common/http';
// in-memory-data
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardProductsComponent } from './dashboard-products/dashboard-products.component';
//import { LoginComponent } from './login/login.component';
//import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    CreditcardComponent,
    DashboardComponent,
    DashboardProductsComponent,
      //  LoginComponent,
  //  DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
//    HttpClientInMemoryWebApiModule.forRoot(
//      InMemoryDataService, { dataEncapsulation: false }
//)
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
