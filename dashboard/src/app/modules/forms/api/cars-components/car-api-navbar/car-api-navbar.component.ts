import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-api-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './car-api-navbar.component.html',
  styleUrl: './car-api-navbar.component.css'
})
export class CarApiNavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
