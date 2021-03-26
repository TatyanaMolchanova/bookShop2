import {
  Component,
  OnInit,
  AfterContentChecked
} from '@angular/core';
import {BookModel} from '../shared/interfaces';
import {BookService} from '../shared/services/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterContentChecked {
  itemsInCart: BookModel[] = [];
  totalItemsAmountInCart: number = 0;
  totalPriceInCart: number = 0;
  sortByParams: string;
  ascending: boolean = false;
  color: string = '#fff';
  isCartEmpty: boolean;

  sortParams = [
    {value: 'name', viewValue: 'By name'},
    {value: 'price', viewValue: 'By price'},
    {value: 'howMuchIsAddedToCart', viewValue: 'By quantity'},
  ];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.itemsInCart = this.bookService.boughtBooksList;

    // console.log('this.itemsInCart', this.itemsInCart);

    if (this.itemsInCart.length > 0) {
      this.totalItemsAmountInCart = this.itemsInCart.map(item => item.howMuchIsAddedToCart)
        .reduce((prev, curr) => prev + curr);

      this.totalPriceInCart = this.itemsInCart.map(item => item.price * item.howMuchIsAddedToCart)
        .reduce((prev, curr) => prev + curr);
    } else {
      this.totalItemsAmountInCart = 0;
      this.totalPriceInCart = 0;
    }
    this.bookService.countTotalAmountInCart(this.totalItemsAmountInCart);
  }

  addBookExample(item) {
    item.howMuchIsAddedToCart++;
  }

  removeBookExample(item) {
    if (item.howMuchIsAddedToCart === 0) {
      return;
    }
    item.howMuchIsAddedToCart--;
  }

  removeBook(item) {
    this.removeBookExample(item);
    this.bookService.removeBookFromCart(item.id);
  }

  makeOrder() {
    const order = this.itemsInCart;
    console.log('order', order);
    this.bookService.boughtBooksList = [];
  }
}
