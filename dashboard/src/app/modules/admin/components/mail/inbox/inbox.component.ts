import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inbox',
  imports: [CommonModule],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {
  
  inboxData = [
    {
      from: 'Eileen Horton',
      subject: "An 'extremely credible source'",
      preview: 'Hi Nathan, An extremely credible source has called...',
      received: '12:06PM',
      avatar: 'https://i.pravatar.cc/40?img=1',
      status: 'unread',
      starred: false,
    },
    {
      from: 'Terrance Moreno',
      subject: 'Lorem Ipsum is FAKE TEXT!',
      preview: 'Hi Nathan, All of this text is just filler...',
      received: '9:35PM',
      avatar: 'https://i.pravatar.cc/40?img=2',
      status: 'important',
      starred: true,
    },
    {
      from: 'Jasmine Burns',
      subject: 'Project Update',
      preview: 'Hey Nathan, Ive attached the latest files for review.',
      received: '2:15PM',
      avatar: 'https://i.pravatar.cc/40?img=3',
      status: 'read',
      starred: false,
    },
    {
      from: 'Leo Vargas',
      subject: 'New Meetup Schedule',
      preview: 'Hi team, Heres the updated schedule for next weeks meetup.',
      received: '11:02AM',
      avatar: 'https://i.pravatar.cc/40?img=4',
      status: 'important',
      starred: true,
    },
    {
      from: 'Nina Reeves',
      subject: 'Invitation to speak at DevCon',
      preview: 'Dear Nathan, Wed love for you to speak at our event...',
      received: '7:47AM',
      avatar: 'https://i.pravatar.cc/40?img=5',
      status: 'unread',
      starred: false,
    },
    {
      from: 'Julian Schultz',
      subject: 'Are you free for lunch?',
      preview: 'Hey, Are you around next week for a catch-up lunch?',
      received: '10:28AM',
      avatar: 'https://i.pravatar.cc/40?img=6',
      status: 'read',
      starred: true,
    },
    {
      from: 'Maya Patel',
      subject: 'Team Goals - Q3',
      preview: 'Lets set up a time to align on Q3 objectives.',
      received: '6:55PM',
      avatar: 'https://i.pravatar.cc/40?img=7',
      status: 'read',
      starred: false,
    },
    {
      from: 'Carlos Jimenez',
      subject: 'Re: Invoice #93872',
      preview: 'Thanks for the update, Ive processed the payment.',
      received: '3:44PM',
      avatar: 'https://i.pravatar.cc/40?img=8',
      status: 'read',
      starred: false,
    },
    {
      from: 'Tanya Rivers',
      subject: 'Congrats on your promotion!',
      preview: 'Nathan, Huge congrats! So proud of you.',
      received: '9:20AM',
      avatar: 'https://i.pravatar.cc/40?img=9',
      status: 'important',
      starred: true,
    },
    {
      from: 'Dean Harrington',
      subject: 'Security Alert',
      preview: 'We noticed a new login from an unknown device...',
      received: '4:03AM',
      avatar: 'https://i.pravatar.cc/40?img=10',
      status: 'unread',
      starred: false,
    },
    {
      from: 'Amira Khan',
      subject: 'Weekly Report',
      preview: 'Attached is the report covering our weekly KPIs.',
      received: '12:45PM',
      avatar: 'https://i.pravatar.cc/40?img=11',
      status: 'read',
      starred: true,
    },
    {
      from: 'Victor Lam',
      subject: 'Customer Feedback Summary',
      preview: 'Sharing the latest customer insights we gathered...',
      received: '5:18PM',
      avatar: 'https://i.pravatar.cc/40?img=12',
      status: 'read',
      starred: false,
    },
    {
      from: 'Emily Brooks',
      subject: 'Happy Birthday!',
      preview: 'Wishing you a fantastic year ahead. 🎉',
      received: '8:00AM',
      avatar: 'https://i.pravatar.cc/40?img=13',
      status: 'important',
      starred: true,
    },
    {
      from: 'Zachary Fox',
      subject: 'Monthly Budget Review',
      preview: 'Let"s review last months expenditures together.',
      received: '11:50AM',
      avatar: 'https://i.pravatar.cc/40?img=14',
      status: 'read',
      starred: false,
    },
    {
      from: 'Rina Singh',
      subject: 'Holiday Plans',
      preview: 'Are you planning anything for the long weekend?',
      received: '10:21AM',
      avatar: 'https://i.pravatar.cc/40?img=15',
      status: 'read',
      starred: false,
    },
    {
      from: 'Marcus Bell',
      subject: 'Performance Review Reminder',
      preview: 'Reminder: Your performance review is this Thursday.',
      received: '1:14PM',
      avatar: 'https://i.pravatar.cc/40?img=16',
      status: 'unread',
      starred: true,
    },
    {
      from: 'Isla Freeman',
      subject: 'Flight Itinerary Confirmation',
      preview: 'Your flight booking has been confirmed...',
      received: '3:30PM',
      avatar: 'https://i.pravatar.cc/40?img=17',
      status: 'read',
      starred: false,
    },
    {
      from: 'Omar Chen',
      subject: 'Can we move our call?',
      preview: 'Something came up, can we reschedule our chat?',
      received: '5:52PM',
      avatar: 'https://i.pravatar.cc/40?img=18',
      status: 'important',
      starred: true,
    },
    {
      from: 'Clara Holt',
      subject: 'Final Draft Ready',
      preview: 'I"ve made all the requested edits. Take a look!',
      received: '7:22PM',
      avatar: 'https://i.pravatar.cc/40?img=19',
      status: 'read',
      starred: false,
    },
    {
      from: 'Bryce Warner',
      subject: 'Tech Conference RSVP',
      preview: 'Please RSVP by Friday if you plan to attend.',
      received: '2:09PM',
      avatar: 'https://i.pravatar.cc/40?img=20',
      status: 'unread',
      starred: false,
    },
  ];

  toggleStar(mail: any) {
    mail.starred = !mail.starred;
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'unread': return 'bg-blue-500';
      case 'important': return 'bg-red-500';
      case 'read': return 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  }

  getStatusText(status: string): string {
    switch(status) {
      case 'unread': return 'Unread';
      case 'important': return 'Important';
      case 'read': return 'Read';
      default: return 'Read';
    }
  }
  deleteMail(mailToDelete: any) {
    const confirmDelete = confirm('Are you sure you want to delete this mail?');
    if (confirmDelete) {
      this.inboxData = this.inboxData.filter(mail => mail !== mailToDelete);
    }
  }
}
