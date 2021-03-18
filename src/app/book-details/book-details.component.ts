import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookService} from '../shared/services/book.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {BookModel} from '../shared/interfaces';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  id: number;
  private subscription;
  books;
  items: BookModel[] = [];
  book: BookModel;

  constructor(public bookService: BookService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['productID'];
    });
    this.books = this.bookService.getBooks().subscribe(books => this.items = books);
    this.book = this.items.filter(item => item.id === this.id)[0];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.books.unsubscribe();
  }

  buy(book: BookModel) {
    book.howMuchIsAddedToCart++;
    this.bookService.addBook(book);
  }

}
