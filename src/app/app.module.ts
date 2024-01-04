import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CustomerComponent } from './components/customers/customer/customer.component';
import { OrderComponent } from './components/orders/order/order.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductComponent } from './components/products/product/product.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductAddEditComponent } from './components/products/product-add-edit/product-add-edit.component';
import { OrderAddEditComponent } from './components/orders/order-add-edit/order-add-edit.component';
import { CustomerAddEditComponent } from './components/customers/customer-add-edit/customer-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    CustomerComponent,
    OrderComponent,
    DashboardComponent,
    ProductComponent,
    ProductAddEditComponent,
    OrderAddEditComponent,
    CustomerAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
