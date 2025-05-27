import { Component } from '@angular/core';
import { PercentagePipe } from '../../../../pipes/percentage.pipe';

@Component({
  selector: 'app-c-pipes',
  imports: [PercentagePipe],
  templateUrl: './c-pipes.component.html',
  styleUrl: './c-pipes.component.css'
})
export class CPipesComponent {

}
