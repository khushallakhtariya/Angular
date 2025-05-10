import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  loading: boolean = false; // Added loading property

  // Default credentials
  defaultEmail: string = 'admin@gmail.com';
  defaultPassword: string = 'admin123';

  constructor(private router: Router) {}

  login() {
    this.loading = true; // Set loading to true when login starts
    this.errorMessage = ''; // Clear any previous error messages

    // Simulate API call with timeout
    setTimeout(() => {
      if (this.email === this.defaultEmail && this.password === this.defaultPassword) {
        // Navigate to admin dashboard
        this.router.navigate(['/deshbord']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
      this.loading = false; // Set loading to false when done
    }, 1000); // 1 second delay to simulate network request
  }
}