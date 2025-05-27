import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberAbbreviate'
})
export class NumberAbbreviatePipe implements PipeTransform {

  transform(value: number, decimal: number = 1): string {
    if (value === null || value === undefined) return '';
    if (value < 1000) return value.toString();

    const suffixes = ['K', 'M', 'B', 'T'];
    const suffixNum = Math.floor(('' + value).length / 3) - 1;

    const shortValue = (value / Math.pow(1000, suffixNum + 1)).toFixed(decimal);
    return shortValue + suffixes[suffixNum];
  }

}
