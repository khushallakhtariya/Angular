import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe, LowerCasePipe, DatePipe, CurrencyPipe, PercentPipe, JsonPipe, DecimalPipe, SlicePipe,TitleCasePipe,AsyncPipe,],
  standalone: true,
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  name = 'khushal lakhtariya';
  birthday = new Date(2005, 9, 13);
  price = 1234.56;
  percentValue = 0.75;
  jsonData = { name: 'khushal', age: 21, location: 'Ahemdabad' };
  numberValue = 1234567.89;
  sliceText = 'Angular is awesome!';
  today = of(Date.now());
  
}

// 18nPluralPipe
// I18nSelectPipe