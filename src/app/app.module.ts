import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import {AdminOrderssComponent } from './admin/admin-orders/admin-orderss.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyOrdersComponent,
    ProductsComponent,
    AdminProductsComponent,
    AdminOrderssComponent,
    ShoppingCartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
