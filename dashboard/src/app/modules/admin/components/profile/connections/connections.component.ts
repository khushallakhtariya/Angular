import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-connections',
  imports:[CommonModule],
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css'],
})
export class ConnectionsComponent {
  connections = [
    { name: 'Emma Smith', role: 'Art Director', earnings: '$14,560', sales: '$236,400', avatar: 'E' },
    { name: 'Melody Macy', role: 'Marketing Analytic', earnings: '$14,560', sales: '$236,400', avatar: 'M' },
    { name: 'Max Smith', role: 'Software Enginer', earnings: '$14,560', sales: '$236,400', avatar: 'M' },
    { name: 'Sean Bean', role: 'Web Developer', earnings: '$14,560', sales: '$236,400', avatar: 'S' },
    { name: 'Brian Cox', role: 'UI/UX Designer', earnings: '$14,560', sales: '$236,400', avatar: 'B' },
    { name: 'Mikaela Collins', role: 'Head Of Marketing', earnings: '$14,560', sales: '$236,400', avatar: 'M' },
    { name: 'Francis Mitcham', role: 'Software Arcitect', earnings: '$14,560', sales: '$236,400', avatar: 'F' },
    { name: 'Olivia Wild', role: 'System Admin', earnings: '$14,560', sales: '$236,400', avatar: 'O' },
    { name: 'Neil Owen', role: 'Account Manager', earnings: '$14,560', sales: '$236,400', avatar: 'N' },
    { name: 'Dan Wilson', role: 'Web Desinger', earnings: '$14,560', sales: '$236,400', avatar: 'D' },
    { name: 'Emma Bold', role: 'Corporate Finance', earnings: '$14,560', sales: '$236,400', avatar: 'E' },
    { name: 'Ana Crown', role: 'Customer Relationship', earnings: '$14,560', sales: '$236,400', avatar: 'A' },
  ];
}
