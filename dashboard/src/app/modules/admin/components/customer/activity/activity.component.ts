import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  imports: [CommonModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.css',
})
export class ActivityComponent {
  loading = false;
  messageShown = false;

  loadMore() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.messageShown = true;
    }, 2000); // 2 seconds
  }

  activityLog = [
    {
      date: new Date('2025-05-06'),
      items: [
        {
          time: '4:38 PM',
          title: 'Support Ticket Update',
          description:
            'Customer service team is working on support ticket #123456',
          icon: 'call',
        },
      ],
    },
    {
      date: new Date('2025-05-05'),
      items: [
        {
          time: '9:06 PM',
          title: 'Support Ticket Update',
          description:
            'Customer service team is working on support ticket #123456',
          icon: 'call',
        },
        {
          time: '8:46 PM',
          title: 'Support Ticket',
          description: 'Angelina Gotelli opened a support ticket #113467',
          icon: 'confirmation_number',
        },
      ],
    },
    {
      date: new Date('2025-05-04'),
      items: [
        {
          time: '6:36 AM',
          title: 'Payment',
          description:
            'Angelina Gotelli successfully made a payment for the order',
          icon: 'payments',
        },
        {
          time: '6:10 AM',
          title: 'Change Plan',
          description: 'Angelina Gotelli switched to Acme pro plan to annually',
          icon: 'autorenew',
        },
        {
          time: '4:57 AM',
          title: 'View Plan',
          description: 'Angelina Gotelli visited subscription page',
          icon: 'visibility',
        },
      ],
    },
  ];
}
