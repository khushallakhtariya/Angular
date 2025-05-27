import { Component } from '@angular/core';
import { PercentagePipe } from '../../../../pipes/percentage.pipe';
import { ReversePipe } from '../../../../pipes/reverse.pipe';
import { FilterPipe } from '../../../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaskPipe } from '../../../../pipes/mask.pipe';
import { NumberAbbreviatePipe } from "../../../../pipes/number-abbreviate.pipe";

@Component({
  selector: 'app-c-pipes',
  imports: [PercentagePipe, ReversePipe, FilterPipe, FormsModule, CommonModule, MaskPipe, NumberAbbreviatePipe] ,
  templateUrl: './c-pipes.component.html',
  styleUrl: './c-pipes.component.css'
})
export class CPipesComponent {

  users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 28 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 22 },
    { name: 'khushal', age: 21 },
  ];
  searchText = '';
}
