import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
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
