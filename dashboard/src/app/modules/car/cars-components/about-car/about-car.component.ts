import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-car',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-car.component.html',
  styleUrl: './about-car.component.css'
})
export class AboutCarComponent {
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }
}
