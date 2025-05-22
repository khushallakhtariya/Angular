import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; // <-- import this
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatButtonToggleModule, 
    CommonModule,
    MatBadgeModule
  ],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']  
})
export class ButtonsComponent {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
