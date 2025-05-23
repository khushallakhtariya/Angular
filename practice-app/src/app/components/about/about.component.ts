import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import {Location } from '@angular/common'; 

@Component({
  selector: 'app-about',
  imports: [ RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }
}
