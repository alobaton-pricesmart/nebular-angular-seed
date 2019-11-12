import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyPipe'
})
export class EmptyPipe implements PipeTransform {

  transform(valor: number): any {
    return valor ? valor : '-';
  }
}