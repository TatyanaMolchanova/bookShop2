import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {AuthDialogComponent} from '../dialog/auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isAdmin: boolean = false;

  adminLogin = new FormGroup({
    loginAdmin: new FormControl(''),
    passwordAdmin: new FormControl('')
  });

  constructor(public dialog: MatDialog,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getAdminState(this.isAdmin);
  }

  login() {
    if (this.adminLogin.value.loginAdmin === 'admin' && this.adminLogin.value.passwordAdmin === '123456') {
      this.isAdmin = true;
      this.authService.getAdminState(this.isAdmin);
      console.log(' this.authService.getAdminState(this.isAdmin)',  this.authService.getAdminState(this.isAdmin));
      this.router.navigate(['/admin', 'products']);
    } else {
      this.dialog.open(AuthDialogComponent);
    }
  }
}
