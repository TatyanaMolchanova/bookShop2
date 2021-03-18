import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() {
  }

  generatorFactory(n: number): string {
    return Math.random().toString(36).substr(2, n);
  }
}
