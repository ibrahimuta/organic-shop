import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsernameComponent } from './username/username.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: 'username', component: UsernameComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
