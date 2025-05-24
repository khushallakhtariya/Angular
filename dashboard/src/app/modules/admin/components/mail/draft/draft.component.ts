import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-draft',
  imports: [CommonModule],
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.css'
})
export class DraftComponent {
  inboxData = [
    {
      from: 'Eileen Horton',
      subject: "An 'extremely credible source'",
      preview: 'Hi Nathan, An extremely credible source has called...',
      received: '12:06PM',
      avatar: 'https://i.pravatar.cc/40?img=1',
      status: 'draft',
      starred: false,
    },
    {
      from: 'Terrance Moreno',
      subject: 'Lorem Ipsum is FAKE TEXT!',
      preview: 'Hi Nathan, All of this text is just filler...',
      received: '9:35PM',
      avatar: 'https://i.pravatar.cc/40?img=2',
      status: 'draft',
      starred: false,
    },
    {
      from: 'Jasmine Burns',
      subject: 'Project Update',
      preview: 'Hey Nathan, Ive attached the latest files for review.',
      received: '2:15PM',
      avatar: 'https://i.pravatar.cc/40?img=3',
      status: 'draft',
      starred: false,
    }
  ];

  toggleStar(mail: any) {
    mail.starred = !mail.starred;
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'draft': return 'bg-yellow-400';

      default: return 'bg-gray-300';
    }
  }

  getStatusText(status: string): string {
    switch(status) {
      case 'draft': return 'draft';
    
      default: return 'Draft';
    }
  }
  deleteMail(mailToDelete: any) {
    const confirmDelete = confirm('Are you sure you want to delete this mail?');
    if (confirmDelete) {
      this.inboxData = this.inboxData.filter(mail => mail !== mailToDelete);
    }
  }
}
