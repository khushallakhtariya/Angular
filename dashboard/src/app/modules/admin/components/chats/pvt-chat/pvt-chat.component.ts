import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  lastActive: string;
  status?: string;
  unread?: number;
}

interface Message {
  from: 'self' | 'user';
  text: string;
  timestamp: Date;
  read?: boolean; // <-- Add this line
}

@Component({
  selector: 'app-pvt-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pvt-chat.component.html',
  styleUrls: ['./pvt-chat.component.css']
})
export class PvtChatComponent {
  users: User[] = [
    { id: 1, name: 'Melody Macy', email: 'melody@allbox.com', lastActive: '5 hrs ago', status: 'Active' },
    { id: 2, name: 'Max Smith', email: 'max@kt.com', lastActive: '20 hrs ago' },
    { id: 3, name: 'Sean Bean', email: 'sean@dellino.com', lastActive: '20 hrs ago' },
    { id: 4, name: 'Brian Cox', email: 'brian@exchange.com', lastActive: '2 mins ago', status: 'Active', unread: 3 },
    { id: 5, name: 'Mikaela Collins', email: 'mikaela@gexcom.com', lastActive: '1 day ago' },
    { id: 6, name: 'Francis Micham', email: 'fr.micham@jpmg.com.au', lastActive: '5 hrs ago' },
    { id: 7, name: 'Olivia Wild', email: 'olivia@corpmail.com', lastActive: '1 week ago' },
    { id: 8, name: 'Neil Owen', email: 'owen.neil@gmail.com', lastActive: '20 hrs ago' },
    { id: 9, name: 'Dan Wilson', email: 'dan@contalling.com', lastActive: '2 weeks ago' },
    { id: 10, name: 'Emma Bold', email: 'emma@linienco.com', lastActive: '1 day ago' }
  ];

  selectedUser: User = this.users[3]; // Default to Brian Cox as in the screenshot

  messages: Message[] = [
    { from: 'user', text: 'Active', timestamp: new Date(Date.now() - 120000) },
    { from: 'user', text: 'Brian Cox 2 mins', timestamp: new Date(Date.now() - 120000) },
    { from: 'user', text: 'How likely are you to recommend our company to your friends and family?', timestamp: new Date(Date.now() - 300000) },
    { from: 'self', text: '5 mins', timestamp: new Date(Date.now() - 300000) },
    { from: 'user', text: 'Hey there, we\'re just writing to let you know that you\'ve been subscribed to a repository on GitHub.', timestamp: new Date(Date.now() - 7200000) },
    { from: 'user', text: 'You\'ll receive notifications for all issues, pull requests!', timestamp: new Date(Date.now() - 7200000) }
  ];

  newMessage = '';

  selectUser(user: User) {
    this.selectedUser = user;
        if (user.unread) {
      user.unread = undefined;
    }
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        from: 'self',
        text: this.newMessage,
        timestamp: new Date()
      });
      this.newMessage = '';
      
      // Scroll to bottom
      setTimeout(() => {
        const messagesContainer = document.querySelector('.overflow-y-auto');
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      }, 0);
    }
  }
}