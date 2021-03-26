import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { OrderByPipe } from './shared/pipes/order-by.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { ChangeStyleDirective } from './shared/directives/change-style.directive';
import { BookDetailsComponent } from './book-details/book-details.component';
import { OrderComponent } from './order/order.component';
import { OrderDialogComponent } from './dialog/order-dialog/order-dialog.component';
import { AuthDialogComponent } from './dialog/auth-dialog/auth-dialog.component';
import { StoreModule } from '@ngrx/store';
import { bookCounterReducer } from './shared/store/bookCounter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    CartItemComponent,
    AboutComponent,
    OrderByPipe,
    HighlightDirective,
    ChangeStyleDirective,
    BookDetailsComponent,
    OrderComponent,
    OrderDialogComponent,
    AuthDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ count: bookCounterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
