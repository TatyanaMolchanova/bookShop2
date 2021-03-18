import {
  AfterContentChecked,
  Component, OnDestroy,
  OnInit
} from '@angular/core';
import { BookService } from "../shared/services/book.service";
import { BookModel } from "../shared/interfaces";
import { FormGroup, FormControl } from '@angular/forms';
// import { OrderByPipe } from '../shared/pipes/order-by.pipe';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterContentChecked {

  books: BookModel[] = [];
  cartItemsNumber: number = 0;
  itemsInCart;
  howMuchIsAddedToCart;

  constructor(public bookService: BookService) { }

  ngOnInit() {
    // this.getBooks();
    // this.bookService.getTotalAmountInCart$.subscribe((totalAmount) => {
    //
    //   console.log('totalAmount', totalAmount);
    //   this.cartItemsNumber = totalAmount;
    // });
    //
    //
    //
    //
    // // this.cartItemsNumber = this.bookService.getTotalAmountInCartSubject$.next();
    //
    // // this.bookService.countTotalAmountInCart(totalAmount)
    // console.log('this.cartItemsNumber', this.cartItemsNumber);
  }

  ngAfterContentChecked(): void {
    // this.itemsInCart = this.bookService.boughtBooksList.map(item => {
    //   // console.log('item.how', item.howMuchIsAddedToCart);
    //   this.cartItemsNumber = item.howMuchIsAddedToCart;
    // });

    // if (this.bookService.boughtBooksList.length > 0) {
    //   this.howMuchIsAddedToCart = this.bookService.boughtBooksList.reduce((prev, curr) => {
    //     console.log(prev, curr);
    //     console.log('sum', prev.howMuchIsAddedToCart + curr.howMuchIsAddedToCart);
    //     return prev.howMuchIsAddedToCart + curr.howMuchIsAddedToCart;
    //   });
    //   console.log('this.itemsInCart', this.itemsInCart);
    // }

  }

  buy(book: BookModel) {
    book.howMuchIsAddedToCart++;
    this.bookService.addBook(book);
    console.log('buy');
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }
}
