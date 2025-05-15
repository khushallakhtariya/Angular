import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  email: string = '';
  message: string = '';
  isSuccess: boolean = false;

  onSubmit() {
    if (this.email && this.validateEmail(this.email)) {
      this.message = '✅ Password reset instructions have been sent to your email.';
      this.isSuccess = true;
    } else {
      this.message = '❌ Please enter a valid email address.';
      this.isSuccess = false;
    }
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
}
