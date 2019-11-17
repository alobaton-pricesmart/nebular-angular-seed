import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe) { }
  transform(valor: number): any {
    return this.currencyPipe.transform(valor ? valor : 0, 'COP');
  }
}