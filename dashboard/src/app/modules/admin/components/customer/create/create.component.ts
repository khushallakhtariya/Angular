import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule,FormGroup,Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  customerForm: FormGroup;
  tags: string[] = [];
  newTag = '';
isSubmitting: any;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      profileImage: [null]
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.customerForm.patchValue({
        profileImage: file
      });
    }
  }

  addTag() {
    if (this.newTag.trim() && !this.tags.includes(this.newTag.trim())) {
      this.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }

  removeTag(tag: string) {
    this.tags = this.tags.filter(t => t !== tag);
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const formData = {
        ...this.customerForm.value,
        tags: this.tags
      };
      console.log('Form submitted:', formData);
      // Here you would typically call your API service
    } else {
      this.customerForm.markAllAsTouched();
    }
  }
}
