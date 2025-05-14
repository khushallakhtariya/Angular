import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-4',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-4.component.html',
  styleUrls: ['./form-4.component.css']
})
export class Form4Component {
  form: FormGroup;
  successMessage: string | undefined;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const pass = form.get('password')?.value;
    const confirm = form.get('repeatPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.form.valid) {
      this.successMessage = 'Form submitted successfully!';
      setTimeout(() => {
        this.successMessage = '';
      }, 3000); 
      this.form.reset();  
    } else {
      this.form.markAllAsTouched();
    }
  }
}
