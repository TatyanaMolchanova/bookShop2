import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdminSubject = new Subject<boolean>();
  isAdmin$ = this.isAdminSubject.asObservable();

  constructor() { }

  getAdminState(isAdmin) {
    console.log('auth isAdmin', isAdmin);
    this.isAdminSubject.next(isAdmin);
  }
}
