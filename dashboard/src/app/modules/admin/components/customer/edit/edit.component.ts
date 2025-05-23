import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports:[FormsModule,CommonModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  customer = {
    firstName: 'Angelina',
    userName: 'Gotelli',
    email: 'carelyn_bf@hotmail.com',
    phoneCountryCode: '+1',
    phoneNumber: '121231234',
    country: 'United States',
    address: '123 Main St',
    city: 'New York',
    postalCode: '10001',
    customerTags: '',
    banned: false,
    accountVerified: true,
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  };

  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      // Validate file size (2MB max)
      if (input.files[0].size > 2 * 1024 * 1024) {
        alert('File size exceeds 2MB limit');
        return;
      }
      
      const reader = new FileReader();
      reader.onload = () => {
        this.customer.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSubmit() {
    // Handle form submission
    console.log('Form submitted:', this.customer);
    // Here you would typically send the data to your backend
  }
}
