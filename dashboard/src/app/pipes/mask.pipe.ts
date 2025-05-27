import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, visibleDigits: number = 4, maskChar: string = '*'): string {
    if (!value || value.length <= visibleDigits) return value;

    const maskedPart = maskChar.repeat(value.length - visibleDigits);
    const visiblePart = value.slice(-visibleDigits);
    return maskedPart + visiblePart;
  }

}
