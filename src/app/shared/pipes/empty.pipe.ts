import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'emptyPipe'
})
export class EmptyPipe implements PipeTransform {

  transform(valor: number): any {
    return valor ? valor : '-';
  }
}