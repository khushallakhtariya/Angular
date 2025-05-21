import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; // <-- import this
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true, // <-- Add this if you want a standalone component
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatButtonToggleModule, // <-- add here
    CommonModule
  ],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']  // fix typo from styleUrl to styleUrls
})
export class ButtonsComponent {}
