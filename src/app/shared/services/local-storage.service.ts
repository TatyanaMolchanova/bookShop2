import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.storage = this.document.defaultView.localStorage;

    // console.log('this.storage', this.storage);
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
