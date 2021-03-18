import {Component, Input, OnInit} from '@angular/core';
import {BookModel} from "../shared/interfaces";
import {BookService} from "../shared/services/book.service";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  itemInCart: BookModel;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.itemInCart = this.bookService.addedBook;
    console.log('cart-item this.itemInCart', this.itemInCart);
  }

  addBookExample() {
    this.itemInCart.howMuchIsAddedToCart++;
  }

  removeBookExample() {
    if (this.itemInCart.howMuchIsAddedToCart === 0) {
      return;
    }
    this.itemInCart.howMuchIsAddedToCart--;
  }

  removeBook(bookId) {
    this.removeBookExample();
    this.bookService.removeBookFromCart(bookId);
  }
}
