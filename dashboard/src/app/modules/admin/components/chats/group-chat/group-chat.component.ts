import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-group-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.css']
})
export class GroupChatComponent {
  // List of available groups with different types, names, and messages
  groups = [
    { 
      name: 'Group A', 
      type: 'Development', 
      messages: this.initialMessages('Alice', 'Bob', 'Eve') 
    },
    { 
      name: 'Group B', 
      type: 'Marketing', 
      messages: this.initialMessages('Sarah', 'Charlie', 'Alex') 
    },
    { 
      name: 'Group C', 
      type: 'Design', 
      messages: this.initialMessages('John', 'Megan', 'Rachel') 
    }
  ];

  selectedGroup: any = null;
  newMessage: string = '';

  // Set the first group as the default
  ngOnInit() {
    this.selectGroup(this.groups[0]);
  }

  // Initial messages for each group, customized for different names
  initialMessages(sender1: string, sender2: string, sender3: string) {
    return [
      { sender: sender1, text: `Hello, I need help with the project`, time: this.getCurrentTime() },
      { sender: sender2, text: `Sure, what can I assist with?`, time: this.getCurrentTime() },
      { sender: sender3, text: `Let's get started on the tasks!`, time: this.getCurrentTime() },
      { sender: 'You', text: `Hello everyone, I'm ready to begin!`, time: this.getCurrentTime() }
    ];
  }

  // Helper function to get the current time in 12-hour format
  getCurrentTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Switch to the selected group
  selectGroup(group: any) {
    this.selectedGroup = group;
  }

  // Send a new message to the selected group
  sendMessage() {
    if (this.newMessage.trim()) {
      const currentTime = this.getCurrentTime();
      this.selectedGroup.messages.push({
        sender: 'You',
        text: this.newMessage,
        time: currentTime
      });
      this.newMessage = '';

      // Scroll to the bottom of the chat after sending the message
      setTimeout(() => {
        const container = document.querySelector('.overflow-y-auto');
        container?.scrollTo(0, container.scrollHeight);
      }, 50);
    }
  }

  // Create a new group with improved functionality
  createNewGroup() {
    const newGroupName = prompt('Enter the new group name:');
    const newGroupType = prompt('Enter the type of chat (e.g., Development, Marketing):');
    
    if (!newGroupName || !newGroupType) {
      alert('Both group name and type are required.');
      return;
    }

    // Validate that the group name is not already taken
    const groupExists = this.groups.some(group => group.name.toLowerCase() === newGroupName.toLowerCase());
    if (groupExists) {
      alert('A group with this name already exists.');
      return;
    }

    // Create the new group
    const newGroup = { 
      id: this.generateUniqueId(), // Generate a unique ID
      name: newGroupName, 
      type: newGroupType, 
      messages: [] 
    };

    // Add the new group to the list
    this.groups.push(newGroup);

    // Select the newly created group
    this.selectGroup(newGroup);

    // Notify the user that the group was created
    alert(`New group "${newGroupName}" of type "${newGroupType}" created successfully.`);
  }

  // Helper function to generate a unique ID for a new group
  generateUniqueId() {
    return 'group_' + Math.random().toString(36).substr(2, 9);
  }
}
