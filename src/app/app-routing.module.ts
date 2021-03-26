import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {BookComponent} from './book/book.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {CartComponent} from './cart/cart.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'products-list', pathMatch: 'full'},
  { path: 'products-list', component: BookComponent },
  { path: 'product/:productID', component: BookDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
