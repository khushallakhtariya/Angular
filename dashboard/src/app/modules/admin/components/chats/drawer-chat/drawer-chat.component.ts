import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-drawer-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './drawer-chat.component.html',
  styleUrls: ['./drawer-chat.component.css'],
})
export class DrawerChatComponent {
  showMessageSlider = false;
  newMessage = '';

  selectedPerson: { name: string; avatar?: string } | null = null;

  people = [
    {
      name: 'Emma Smith',
      role: 'Art Director',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/31891109/pexels-photo-31891109/free-photo-of-contemplative-young-man-on-a-sofa-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Melody Macy',
      role: 'Marketing Analytic',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Max Smith',
      role: 'Software Engineer',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Sean Bean',
      role: 'Web Developer',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Brian Cox',
      role: 'UI/UX Designer',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Mikaela Collins',
      role: 'Head Of Marketing',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Francis Mitcham',
      role: 'Software Architect',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Olivia Wild',
      role: 'System Admin',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Neil Owen',
      role: 'Account Manager',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Dan Wilson',
      role: 'Web Designer',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Emma Bold',
      role: 'Corporate Finance',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Ana Crown',
      role: 'Customer Relationship',
      avgEarnings: 14560,
      totalSales: 236400,
      avatar:
        'https://images.pexels.com/photos/832998/pexels-photo-832998.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  chatHistories: {
    [name: string]: { from: 'me' | 'them'; text: string; time: string }[];
  } = {};

  openSlider(person: { name: string; avatar?: string }): void {
    this.selectedPerson = person;
    this.showMessageSlider = true;

    if (!this.chatHistories[person.name]) {
      this.chatHistories[person.name] = [];
    }

    this.newMessage = '';
  }

  closeSlider(): void {
    this.showMessageSlider = false;
    this.selectedPerson = null;
    this.newMessage = '';
  }

  onOverlayClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('fixed')) {
      this.closeSlider();
    }
  }

  sendMessage(): void {
    if (!this.newMessage.trim() || !this.selectedPerson) return;

    const msg = {
      from: 'me' as const,
      text: this.newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    this.chatHistories[this.selectedPerson.name].push(msg);
    this.newMessage = '';
  }
}
