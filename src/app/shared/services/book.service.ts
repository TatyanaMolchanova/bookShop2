import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {BookModel} from '../interfaces';
import {BOOKS} from '../book-list';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  addedBook: BookModel;
  boughtBooksList: BookModel[] = [];
  counter: number = 0;
  getTotalAmountInCart$: Observable<number>;
  // private getTotalAmountInCartSubject$ = new Subject<number>();
  getTotalAmountInCartSubject$ = new Subject<number>();

  constructor() {
    this.getTotalAmountInCart$ = this.getTotalAmountInCartSubject$.asObservable();
  }

  getBooks(): Observable<BookModel[]> {
    return of(BOOKS);
  }

  addBook(book: BookModel) {
    this.boughtBooksList.push(book);
    this.boughtBooksList = this.boughtBooksList.filter((book, index) => {
      const _book = JSON.stringify(book);
      return index === this.boughtBooksList.findIndex(obj => {
        return JSON.stringify(obj) === _book;
      });
    });
    this.addedBook = book;

    // console.log('this.addedBook', this.addedBook);
  }

  countTotalAmountInCart(totalAmount: number) {
    this.getTotalAmountInCartSubject$.next(totalAmount);
  }

  removeBookFromCart(bookId) {
    this.boughtBooksList = this.boughtBooksList
      .filter(book => book.id !== bookId);
  }
}
