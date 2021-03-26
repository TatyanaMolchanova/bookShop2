import {
  Component,
  OnInit
} from '@angular/core';
import { BookService } from "../shared/services/book.service";
import { BookModel } from "../shared/interfaces";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from '../shared/store/bookCounter.action';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: BookModel[] = [];
  cartItemsNumber: number = 0;
  howMuchIsAddedToCart;
  count$: Observable<number>;

  constructor(public bookService: BookService,
              private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
  }

  buy(book: BookModel) {
    book.howMuchIsAddedToCart++;
    this.bookService.addBook(book);
    this.store.dispatch(increment());
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }
}
