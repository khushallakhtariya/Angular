import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule,Location } from '@angular/common'; 

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.css']
})
export class InfoComponent {
  pincode: number | string = '';
  city: string = '';
  address: string = '';
  submittedMessage: string = '';
  constructor(private location: Location) {}


goBack(): void {
  this.location.back();
}

  onSubmit(form: NgForm) {
    this.submittedMessage = 'Hello, your information has been received. We will contact you soon.';
    this.pincode = '';
    this.city = '';
    this.address = '';

    form.resetForm();



  setTimeout(() => {
    this.submittedMessage = '';
  }, 2000); 
  }
}
