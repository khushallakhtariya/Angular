import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sent',
  imports: [CommonModule],
  templateUrl: './sent.component.html',
  styleUrl: './sent.component.css'
})
export class SentComponent {
inboxData = [
    {
      from: 'Eileen Horton',
      subject: "An 'extremely credible source'",
      preview: 'Hi Nathan, An extremely credible source has called...',
      received: '12:06PM',
      avatar: 'https://i.pravatar.cc/40?img=1',
      status: 'sent',
      starred: false,
    },
    {
      from: 'Terrance Moreno',
      subject: 'Lorem Ipsum is FAKE TEXT!',
      preview: 'Hi Nathan, All of this text is just filler...',
      received: '9:35PM',
      avatar: 'https://i.pravatar.cc/40?img=2',
      status: 'sent',
      starred: true,
    },
    {
      from: 'Jasmine Burns',
      subject: 'Project Update',
      preview: 'Hey Nathan, Ive attached the latest files for review.',
      received: '2:15PM',
      avatar: 'https://i.pravatar.cc/40?img=3',
      status: 'seen',
      starred: false,
    },
    {
      from: 'Leo Vargas',
      subject: 'New Meetup Schedule',
      preview: 'Hi team, Heres the updated schedule for next weeks meetup.',
      received: '11:02AM',
      avatar: 'https://i.pravatar.cc/40?img=4',
      status: 'sent',
      starred: true,
    },
    {
      from: 'Nina Reeves',
      subject: 'Invitation to speak at DevCon',
      preview: 'Dear Nathan, Wed love for you to speak at our event...',
      received: '7:47AM',
      avatar: 'https://i.pravatar.cc/40?img=5',
      status: 'seen',
      starred: false,
    },
    {
      from: 'Julian Schultz',
      subject: 'Are you free for lunch?',
      preview: 'Hey, Are you around next week for a catch-up lunch?',
      received: '10:28AM',
      avatar: 'https://i.pravatar.cc/40?img=6',
      status: 'seen',
      starred: true,
    },
    {
      from: 'Maya Patel',
      subject: 'Team Goals - Q3',
      preview: 'Lets set up a time to align on Q3 objectives.',
      received: '6:55PM',
      avatar: 'https://i.pravatar.cc/40?img=7',
      status: 'seen',
      starred: false,
    },
    {
      from: 'Carlos Jimenez',
      subject: 'Re: Invoice #93872',
      preview: 'Thanks for the update, Ive processed the payment.',
      received: '3:44PM',
      avatar: 'https://i.pravatar.cc/40?img=8',
      status: 'sent',
      starred: false,
    }
  ];

  toggleStar(mail: any) {
    mail.starred = !mail.starred;
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'sent': return 'bg-blue-500';
      case 'seen': return 'bg-green-500';
      default: return 'bg-gray-300';
    }
  }

  getStatusText(status: string): string {
    switch(status) {
      case 'sent': return 'sent';
      case 'seen': return 'seen';
      default: return 'seen';
    }
  }
  deleteMail(mailToDelete: any) {
    const confirmDelete = confirm('Are you sure you want to delete this mail?');
    if (confirmDelete) {
      this.inboxData = this.inboxData.filter(mail => mail !== mailToDelete);
    }
  }
}
