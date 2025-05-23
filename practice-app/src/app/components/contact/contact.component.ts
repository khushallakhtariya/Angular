import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule,Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern(/^[a-zA-Z\s]*$/)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],
      phone: ['', [
        Validators.pattern(/^\+?[1-9]\d{1,14}$/)
      ]],
      // subject field removed from form group since it is not used in the template
      enquiryType: ['', [Validators.required]],
      message: ['', [
        Validators.required,
        Validators.maxLength(500)
      ]]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['name']) {
        this.contactForm.patchValue({
          name: decodeURIComponent(params['name']),
          email: params['email'] ? decodeURIComponent(params['email']) : '',
          message: params['message'] ? decodeURIComponent(params['message']) : '',
          // subject is skipped
          phone: params['phone'] ? decodeURIComponent(params['phone']) : '',
          enquiryType: params['enquiryType'] || ''
        });
      }
    });
  }

  // Getters
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get enquiryType() { return this.contactForm.get('enquiryType'); }
  get message() { return this.contactForm.get('message'); }

  // Error message handler
  getErrorMessage(control: AbstractControl | null): string {
    if (!control) return '';

    if (control.hasError('required')) return 'This field is required';
    if (control.hasError('email')) return 'Please enter a valid email address';
    if (control.hasError('pattern')) {
      if (control === this.phone) return 'Please enter a valid phone number';
      if (control === this.name) return 'Name can only contain letters and spaces';
      if (control === this.email) return 'Email format is invalid';
      return 'Invalid format';
    }
    if (control.hasError('minlength')) {
      return `Minimum length is ${control.errors?.['minlength'].requiredLength} characters`;
    }
    if (control.hasError('maxlength')) {
      return `Maximum length is ${control.errors?.['maxlength'].requiredLength} characters`;
    }
    return '';
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.snackBar.open('Please fill in all required fields correctly.', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    this.isSubmitting = true;

    // Simulated form submission delay
    setTimeout(() => {
      console.log('Form Submitted:', this.contactForm.value);

      this.snackBar.open('Your message has been sent successfully!', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });

      this.contactForm.reset();
      this.isSubmitting = false;
    }, 1000);
  }

  resetForm() {
    this.contactForm.reset();
  }
  goBack(): void {
    this.location.back();
  }
}
