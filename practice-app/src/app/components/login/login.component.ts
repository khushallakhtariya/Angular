import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted = false;
  isLoginMode = true;
  isLoading = false;
  successMessage = '';
  errorMessage = '';
  showPassword: { [key: string]: boolean } = {
    password: false,
    confirmPassword: false
  };

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordsMatchValidator });
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.submitted = false;
    this.successMessage = '';
    this.errorMessage = '';
  }

  togglePasswordVisibility(field: string): void {
    this.showPassword[field] = !this.showPassword[field];
    const input = document.getElementById(field) as HTMLInputElement;
    if (input) {
      input.type = this.showPassword[field] ? 'text' : 'password';
    }
  }

  onSubmit(): void {
    this.submitted = true;
    const form = this.isLoginMode ? this.loginForm : this.registerForm;

    if (form.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      
      if (this.isLoginMode) {
        console.log('Logging in with:', form.value);
        this.successMessage = 'Login successful!';
      } else {
        console.log('Registering with:', form.value);
        this.successMessage = 'Registration successful! Please check your email to verify your account.';
      }

      form.reset();
      this.submitted = false;
    }, 1500);

    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }

  socialLogin(provider: string): void {
    console.log(`Logging in with ${provider}`);
    this.isLoading = true;
    
    // Simulate social login
    setTimeout(() => {
      this.isLoading = false;
      this.successMessage = `Successfully authenticated with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`;
    }, 1000);
  }

  get f() {
    return (this.isLoginMode ? this.loginForm : this.registerForm).controls;
  }

  private passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };
  }
}