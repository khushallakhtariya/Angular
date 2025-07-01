import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-car-api-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, MatSnackBarModule],
  templateUrl: './car-api-navbar.component.html',
  styleUrl: './car-api-navbar.component.css',
})
export class CarApiNavbarComponent implements OnInit {
  menuOpen = false;
  isLoggedIn = false;
  userName = '';

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  get firstName(): string {
    return this.userName?.split(' ')[0] || '';
  }

  checkLoginStatus(): void {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    this.isLoggedIn = !!token;

    if (userData) {
      try {
        const user = JSON.parse(userData);
        this.userName = user.name || '';
      } catch (e) {
        console.error('Invalid user data in localStorage');
        this.userName = '';
      }
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.userName = '';
    this.router.navigate(['/cars']);
    this.snackBar.open('Logout successful!', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
