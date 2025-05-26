import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deleted',
  imports: [CommonModule],
  templateUrl: './deleted.component.html',
  styleUrl: './deleted.component.css'
})
export class DeletedComponent {
  inboxData = [
    {
      from: 'Eileen Horton',
      subject: "An 'extremely credible source'",
      preview: 'Hi Nathan, An extremely credible source has called...',
      received: '12:06PM',
      avatar: 'https://i.pravatar.cc/40?img=1',
      status: 'delete',
      starred: false,
      flag:false,
    },
    {
      from: 'Terrance Moreno',
      subject: 'Lorem Ipsum is FAKE TEXT!',
      preview: 'Hi Nathan, All of this text is just filler...',
      received: '9:35PM',
      avatar: 'https://i.pravatar.cc/40?img=2',
      status: 'delete',
      starred: false,
      flag:true,
    },
    {
      from: 'Jasmine Burns',
      subject: 'Project Update',
      preview: 'Hey Nathan, Ive attached the latest files for review.',
      received: '2:15PM',
      avatar: 'https://i.pravatar.cc/40?img=3',
      status: 'delete',
      starred: false,
      flag:false,
    },
    {
      from: 'Leo Vargas',
      subject: 'New Meetup Schedule',
      preview: 'Hi team, Heres the updated schedule for next weeks meetup.',
      received: '11:02AM',
      avatar: 'https://i.pravatar.cc/40?img=4',
      status: 'delete',
      starred: false,
      flag:false,
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
      case 'delete': return 'bg-red-500';
    
      default: return 'bg-red-300';
    }
  }

  getStatusText(status: string): string {
    switch(status) {
      case 'delete': return 'delete'
      default: return 'delete';
    }
  }
}
