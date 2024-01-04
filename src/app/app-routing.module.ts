import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./components/admin-layout/admin-layout.component";
import {LoginComponent} from "./components/login/login.component";
import {CustomerComponent} from "./components/customers/customer/customer.component";
import {OrderComponent} from "./components/orders/order/order.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProductComponent} from "./components/products/product/product.component";
import {OrdersService} from "./services/order/orders.service";
import {CustomersService} from "./services/customer/customers.service";
import {ProductsService} from "./services/product/products.service";
import {CustomerAddEditComponent} from "./components/customers/customer-add-edit/customer-add-edit.component";
import {OrderAddEditComponent} from "./components/orders/order-add-edit/order-add-edit.component";
import {ProductAddEditComponent} from "./components/products/product-add-edit/product-add-edit.component";
import {CustomerAddEditService} from "./services/customer/customer-add-edit.service";
import {OrderAddEditService} from "./services/order/order-add-edit.service";
import {ProductAddEditService} from "./services/product/product-add-edit.service";

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: "full"
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      {
        path:'customer',
        component:CustomerComponent,
        resolve:{
          data:CustomersService
        }
      },
      {
        path:'customer/add-edit',
        component: CustomerAddEditComponent,
        resolve:{
          data: CustomerAddEditService
        }
      },
      {
        path:'order',
        component:OrderComponent,
        resolve:{
          data:OrdersService
        }
      },
      {
        path:'order/add-edit',
        component: OrderAddEditComponent,
        resolve:{
          data:OrderAddEditService
        }
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'product',
        component:ProductComponent,
        resolve:{
          data:ProductsService
        }
      },
      {
        path:'product/add-edit',
        component:ProductAddEditComponent,
        resolve:{
          data: ProductAddEditService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
