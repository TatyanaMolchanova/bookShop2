import {Pipe, PipeTransform} from '@angular/core';
import {BookModel} from '../interfaces';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], ...args: any[]): unknown {
    if (args[0]) {
      if (args[1] === true) {
        array.sort((a, b) => {
          if (a[args[0]] < b[args[0]]) {
            return -1;
          } else if (a[args[0]] > b[args[0]]) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        array.sort((a, b) => {
          if (a[args[0]] < b[args[0]]) {
            return -1;
          } else if (a[args[0]] > b[args[0]]) {
            return 1;
          } else {
            return 0;
          }
        }).reverse();
      }
    }
    return array;
  }
}
