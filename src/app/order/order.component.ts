import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {OrderDialogComponent} from '../dialog/order-dialog/order-dialog.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  orderForm = new FormGroup({
    address: new FormControl('', Validators.required),
    payment: new FormControl('', Validators.required),
    comments: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    const orderInfo = this.orderForm.value;
    console.log('orderInfo', orderInfo);
  }

  orderIsAccepted() {
    const dialogRef = this.dialog.open(OrderDialogComponent);
  }

}
