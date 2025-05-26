import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starred',
  imports: [CommonModule],
  templateUrl: './starred.component.html',
  styleUrl: './starred.component.css'
})
export class StarredComponent {
  successMessage = ''
  inboxData = [
    {
      from: 'Eileen Horton',
      subject: "An 'extremely credible source'",
      preview: 'Hi Nathan, An extremely credible source has called...',
      received: '12:06PM',
      avatar: 'https://i.pravatar.cc/40?img=1',
      status: 'important',
      starred: true,
      flag:false,
    },
    {
      from: 'Terrance Moreno',
      subject: 'Lorem Ipsum is FAKE TEXT!',
      preview: 'Hi Nathan, All of this text is just filler...',
      received: '9:35PM',
      avatar: 'https://i.pravatar.cc/40?img=2',
      status: 'important',
      starred: true,
      flag:false,
    },
    {
      from: 'Jasmine Burns',
      subject: 'Project Update',
      preview: 'Hey Nathan, Ive attached the latest files for review.',
      received: '2:15PM',
      avatar: 'https://i.pravatar.cc/40?img=3',
      status: 'important',
      starred: true,
      flag:true,
    },
    {
      from: 'Leo Vargas',
      subject: 'New Meetup Schedule',
      preview: 'Hi team, Heres the updated schedule for next weeks meetup.',
      received: '11:02AM',
      avatar: 'https://i.pravatar.cc/40?img=4',
      status: 'important',
      starred: true,
      flag:false,
    },
    {
      from: 'Nina Reeves',
      subject: 'Invitation to speak at DevCon',
      preview: 'Dear Nathan, Wed love for you to speak at our event...',
      received: '7:47AM',
      avatar: 'https://i.pravatar.cc/40?img=5',
      status: 'important',
      starred: true,
      flag:false,
    },
    {
      from: 'Julian Schultz',
      subject: 'Are you free for lunch?',
      preview: 'Hey, Are you around next week for a catch-up lunch?',
      received: '10:28AM',
      avatar: 'https://i.pravatar.cc/40?img=6',
      status: 'important',
      starred: true,
      flag:true,
    },
    {
      from: 'Maya Patel',
      subject: 'Team Goals - Q3',
      preview: 'Lets set up a time to align on Q3 objectives.',
      received: '6:55PM',
      avatar: 'https://i.pravatar.cc/40?img=7',
      status: 'important',
      starred: true,
      flag:false,
    },
    {
      from: 'Carlos Jimenez',
      subject: 'Re: Invoice #93872',
      preview: 'Thanks for the update, Ive processed the payment.',
      received: '3:44PM',
      avatar: 'https://i.pravatar.cc/40?img=8',
      status: 'important',
      starred: true,
      flag:false,
    },
    {
      from: 'Tanya Rivers',
      subject: 'Congrats on your promotion!',
      preview: 'Nathan, Huge congrats! So proud of you.',
      received: '9:20AM',
      avatar: 'https://i.pravatar.cc/40?img=9',
      status: 'important',
      starred: true,
      flag:true,
    },

  ];

  toggleStar(mail: any) {
    mail.starred = !mail.starred;
  }
  toggleFlag(mail: any){
    mail.flag = !mail.flag
  }

  getStatusColor(status: string): string {
    switch(status) {

      case 'important': return 'bg-green-500';

      default: return 'bg-gray-300';
    }
  }

  getStatusText(status: string): string {
    switch(status) {
      case 'important': return 'Important';
      default: return 'Read';
    }
  }
  deleteMail(mailToDelete: any) {

    this.inboxData = this.inboxData.filter(mail => mail !== mailToDelete);
    this.successMessage = 'Mail has been successfully deleted.';
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  
}
}
