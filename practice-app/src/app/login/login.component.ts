import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ Required for *ngIf, formGroup, etc.
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted = false;
  isLoginMode = true;
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.submitted = false;
    this.successMessage = '';
  }

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = '';
    const form = this.isLoginMode ? this.loginForm : this.registerForm;

    if (form.invalid) return;

    if (this.isLoginMode) {
      console.log('Logging in with:', form.value);
      this.successMessage = 'Login successful!';
    } else {
      if (form.value.password !== form.value.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Registering with:', form.value);
      this.successMessage = 'Registration successful!';
    }

    form.reset();
    this.submitted = false;
  }

  get f() {
    return (this.isLoginMode ? this.loginForm : this.registerForm).controls;
  }
}
