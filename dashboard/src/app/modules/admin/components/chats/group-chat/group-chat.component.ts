import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-group-chat',
  imports: [CommonModule,FormsModule],
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css']
})
export class GroupChatComponent {
  messages = [
    { sender: 'Alice', text: 'Hey team!', time: '10:00 AM' },
    { sender: 'Bob', text: 'Hello Alice!', time: '10:01 AM' },
    { sender: 'You', text: 'Good morning!', time: '10:02 AM' }
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        sender: 'You',
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.newMessage = '';
    }
  }
}
