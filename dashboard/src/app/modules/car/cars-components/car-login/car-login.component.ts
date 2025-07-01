import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-car-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, MatSnackBarModule],
  templateUrl: './car-login.component.html',
  styleUrl: './car-login.component.css',
})
export class CarLoginComponent {
  constructor(private location: Location, private snackBar: MatSnackBar) {}

  isLoginMode = true;

  // Form fields
  email = '';
  password = '';
  name = '';
  confirmPassword = '';
  error = '';

  private http = inject(HttpClient);
  private router = inject(Router);

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.error = '';
    this.email = '';
    this.password = '';
    this.name = '';
    this.confirmPassword = '';
  }

  onSubmit() {
    this.error = '';

    // Basic form validation
    if (!this.email || !this.password) {
      this.error = 'Email and password are required.';
      return;
    }

    if (!this.isLoginMode) {
      if (!this.name) {
        this.error = 'Name is required for registration.';
        return;
      }

      if (!this.confirmPassword) {
        this.error = 'Please confirm your password.';
        return;
      }

      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match!';
        return;
      }
    }

    if (this.isLoginMode) {
      // LOGIN MODE
      this.http
        .get<any[]>(
          `http://localhost:3000/users?email=${this.email}&password=${this.password}`
        )
        .subscribe(
          (users) => {
            if (users.length > 0) {
              const user = users[0];
              const fakeToken = btoa(`${this.email}:${this.password}`);
              localStorage.setItem('user', JSON.stringify(user));
              localStorage.setItem('token', fakeToken);

              this.snackBar.open('Login successful!', 'Close', {
                duration: 3000,
                panelClass: ['snackbar-success'],
              });

              this.router.navigate(['cars']).then(() => {
                window.location.reload();
              });
            } else {
              this.error = 'Invalid email or password!';
            }
          },
          () => {
            this.error = 'Login request failed!';
          }
        );
    } else {
      // REGISTER MODE
      this.http
        .get<any[]>(`http://localhost:3000/users?email=${this.email}`)
        .subscribe(
          (users) => {
            if (users.length > 0) {
              this.error = 'Email already registered.';
              return;
            }

            const newUser = {
              name: this.name,
              email: this.email,
              password: this.password,
            };

            this.http.post('http://localhost:3000/users', newUser).subscribe(
              () => {
                this.snackBar.open('Registration successful!', 'Close', {
                  duration: 3000,
                  panelClass: ['snackbar-success'],
                });
                this.toggleMode();
              },
              () => {
                this.error = 'Registration failed!';
              }
            );
          },
          () => {
            this.error = 'Registration check failed!';
          }
        );
    }
  }

  goBack(): void {
    this.location.back();
  }
}
