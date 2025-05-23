import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

interface Feedback {
  name: string;
  email: string;
  feedback: string;
}

@Component({
  selector: 'app-user-review',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-riew.component.html',
  styleUrls: ['./user-riew.component.css']
})
export class UserRiewComponent implements OnInit {
  name: string = '';
  email: string = '';
  feedback: string = '';
  message: string = '';
  feedbackList: Feedback[] = [];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const savedFeedbacks = localStorage.getItem('userFeedbacks');
    if (savedFeedbacks) {
      this.feedbackList = JSON.parse(savedFeedbacks);
    }
  }

  SubmitBtn() {
    if (this.name && this.email && this.feedback) {
      const newFeedback: Feedback = {
        name: this.name,
        email: this.email,
        feedback: this.feedback
      };

      this.feedbackList.push(newFeedback);
      localStorage.setItem('userFeedbacks', JSON.stringify(this.feedbackList));

      this.message = 'Feedback Submitted!';
      setTimeout(() => this.message = '', 2000);

      this.name = '';
      this.email = '';
      this.feedback = '';
    }
  }

  delete(index: number): void {
    this.feedbackList.splice(index, 1);
    localStorage.setItem('userFeedbacks', JSON.stringify(this.feedbackList));

    this.message = 'Feedback deleted!';
    setTimeout(() => this.message = '', 4000);
  }
}
