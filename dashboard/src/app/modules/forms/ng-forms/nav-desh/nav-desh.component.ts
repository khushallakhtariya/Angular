import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-desh',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './nav-desh.component.html',
  styleUrls: ['./nav-desh.component.css']
})
export class NavDeshComponent {}
