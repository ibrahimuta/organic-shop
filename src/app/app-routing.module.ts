import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsernameComponent } from './username/username.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },

  { path: 'check-out', component: CheckoutComponent, canActivate: [AuthGuardService] },
  { path: 'order-succcess', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  { path: 'my/orders', component: MyOrderComponent, canActivate: [AuthGuardService]},

  { path: 'admin/products', component: AdminProductsComponent,  canActivate: [AuthGuardService] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
