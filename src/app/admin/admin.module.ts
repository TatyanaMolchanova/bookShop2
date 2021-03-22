import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './shared/services/auth.guard';



@NgModule({
  declarations: [AdminComponent, AdminProductsComponent, AddProductComponent, EditProductComponent, OrdersComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '', component: AdminComponent, children: [
          // {path: '', redirectTo: '/admin/products', pathMatch: 'full'},
          {path: 'products', component: AdminProductsComponent, canActivate: [AuthGuard]},
          {path: 'product/add', component: AddProductComponent, canActivate: [AuthGuard]},
          {path: 'product/edit/:productID', component: EditProductComponent, canActivate: [AuthGuard]},
          {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]}
        ]
      }
    ])
  ],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class AdminModule { }
