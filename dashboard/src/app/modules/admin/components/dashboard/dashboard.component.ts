import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,RouterLink,CommonModule],
  standalone: true,
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  profileMenuOpen = false;
  constructor(private router: Router) {}
  collapsed = false;
  logout() {
    this.router.navigate(['/']);
  }
  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }

}
