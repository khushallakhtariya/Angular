import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-widgets',
  imports:[RouterModule,CommonModule],
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent {
  isNavOpen = false; // controls mobile nav toggle

}
