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
  loading: boolean = false; 
  // Default credentials
  defaultEmail: string = 'admin@gmail.com';
  defaultPassword: string = 'admin123';

  constructor(private router: Router) {}

  login() {
    this.loading = true; 
    this.errorMessage = '';
   
    setTimeout(() => {
      if (this.email === this.defaultEmail && this.password === this.defaultPassword) {
       
        this.router.navigate(['/deshbord']);
      } else {
        this.errorMessage = 'Invalid email or password';
      }
      this.loading = false; 
    }, 1000);
  }
}