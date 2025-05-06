import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add CommonModule here
  templateUrl: './get-info.component.html',
  styleUrls: ['./get-info.component.css']
})
export class InfoComponent {
  pincode: string = '';
  city: string = '';
  address: string = '';
  submittedMessage: string = '';

  onSubmit() {
    this.submittedMessage = 'Hello, your information has been received. We will contact you soon.';
    this.pincode = '';
    this.city = '';
    this.address = '';


  setTimeout(() => {
    this.submittedMessage = '';
  }, 2000); // 2000 milliseconds = 2 seconds
  }
}
