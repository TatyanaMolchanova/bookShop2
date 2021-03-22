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
export class BookComponent implements OnInit {

  books: BookModel[] = [];
  cartItemsNumber: number = 0;
  itemsInCart;
  howMuchIsAddedToCart;

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    // this.bookService.getTotalAmountInCart$.subscribe((totalAmount) => {
    //   this.cartItemsNumber = totalAmount;
    // });
  }

  buy(book: BookModel) {
    book.howMuchIsAddedToCart++;
    this.bookService.addBook(book);
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }
}
