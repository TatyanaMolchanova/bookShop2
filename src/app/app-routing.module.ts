import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'products-list', pathMatch: 'full'},
  { path: 'products-list', component: BookComponent },
  { path: 'product/:productID', component: BookDetailsComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
