import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-car.component.html',
  styleUrl: './book-car.component.css'
})
export class BookCarComponent {
  message: string | undefined;

  constructor(private location: Location) {}

  bookCar() {
    this.message = 'Car booked successfully! Thank you!';
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }
  goBack(): void {
    this.location.back();
  }
}