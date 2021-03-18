import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {

  constructor() {
  }

  getInfo(): { [key: string]: string } {
    return {
      App: 'BookStoreOnline',
      Ver: '1.0'
    };
  }
}
