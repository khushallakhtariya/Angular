import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
  transform(value: number | null | undefined, decimalPlaces: number = 2): string {
    if (value === null || value === undefined || isNaN(value)) {
      return '-';
    }

    // If the value is less than or equal to 1, treat it as a ratio and convert to percentage
    const percentageValue = value <= 1 ? value * 100 : value;

    return `${percentageValue.toFixed(decimalPlaces)}%`;
  }
  
}
