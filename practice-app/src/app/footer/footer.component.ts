import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  pincode: string = '';

  onSubmit() {
    console.log('Entered Pincode:', this.pincode);
    alert(`Pincode submitted: ${this.pincode}`);
  }
}
