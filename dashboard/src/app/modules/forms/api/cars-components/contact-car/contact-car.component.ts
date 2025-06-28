import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-car',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-car.component.html',
  styleUrl: './contact-car.component.css'
})
export class ContactCarComponent {

  constructor( private location: Location) {}
  message: string | undefined;

  submitForm(form: NgForm) {
    if (form.valid) {
      this.message = 'Form submitted successfully!';
      form.resetForm();

      setTimeout(() => {
        this.message = undefined;
      }, 3000);
    }
  }
  goBack(): void {
    this.location.back();
  }
}
