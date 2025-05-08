import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-riew',
  imports: [CommonModule],
  templateUrl: './user-riew.component.html',
  styleUrl: './user-riew.component.css'
})
export class UserRiewComponent {
  message: string | undefined;
  SubmitBtn() {
    this.message = 'Feedback Submitted!';
    setTimeout(() => {
      this.message = '';
    }, 3000); 
  }

}

// defaultReviews = [
//   { name: 'Alice', email: 'alice@example.com', feedback: 'Great service!' },
//   { name: 'Bob', email: 'bob@example.com', feedback: 'Very satisfied.' },
//   { name: 'Charlie', email: 'charlie@example.com', feedback: 'Could be better.' },
//   { name: 'Diana', email: 'diana@example.com', feedback: 'Loved it!' },
//   { name: 'Ethan', email: 'ethan@example.com', feedback: 'Okay experience.' }
// ];
