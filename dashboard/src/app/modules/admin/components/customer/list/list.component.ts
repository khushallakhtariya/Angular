import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Customer {
  id: number;
  name: string;
  email: string;
  location: string;
  status: 'Active' | 'Inactive';
  spent: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private router: Router) {}
  customers: Customer[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      location: 'New York, US',
      status: 'Active',
      spent: '$4520.22',
      avatarUrl: 'https://i.pravatar.cc/32?u=1',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      location: 'Berlin, DE',
      status: 'Inactive',
      spent: '$1340.75',
      avatarUrl: 'https://i.pravatar.cc/32?u=2',
    },
    {
      id: 3,
      name: 'Carol White',
      email: 'carol@example.com',
      location: 'Paris, FR',
      status: 'Active',
      spent: '$2765.00',
      avatarUrl: 'https://i.pravatar.cc/32?u=3',
    },
    {
      id: 4,
      name: 'David Green',
      email: 'david@example.com',
      location: 'Tokyo, JP',
      status: 'Active',
      spent: '$3890.67',
      avatarUrl: 'https://i.pravatar.cc/32?u=4',
    },
    {
      id: 5,
      name: 'Eva Black',
      email: 'eva@example.com',
      location: 'New York, US',
      status: 'Inactive',
      spent: '$1120.00',
      avatarUrl: 'https://i.pravatar.cc/32?u=5',
    },
    {
      id: 6,
      name: 'Frank Adams',
      email: 'frank@example.com',
      location: 'Berlin, DE',
      status: 'Active',
      spent: '$2955.45',
      avatarUrl: 'https://i.pravatar.cc/32?u=6',
    },
    {
      id: 7,
      name: 'Grace Lee',
      email: 'grace@example.com',
      location: 'Paris, FR',
      status: 'Active',
      spent: '$4780.90',
      avatarUrl: 'https://i.pravatar.cc/32?u=7',
    },
    {
      id: 8,
      name: 'Henry Ford',
      email: 'henry@example.com',
      location: 'Tokyo, JP',
      status: 'Inactive',
      spent: '$1820.00',
      avatarUrl: 'https://i.pravatar.cc/32?u=8',
    },
    {
      id: 9,
      name: 'Irene Stone',
      email: 'irene@example.com',
      location: 'New York, US',
      status: 'Active',
      spent: '$3625.25',
      avatarUrl: 'https://i.pravatar.cc/32?u=9',
    },
    {
      id: 10,
      name: 'Jack Brown',
      email: 'jack@example.com',
      location: 'Berlin, DE',
      status: 'Active',
      spent: '$4190.88',
      avatarUrl: 'https://i.pravatar.cc/32?u=10',
    },
    {
      id: 11,
      name: 'Karen Blake',
      email: 'karen@example.com',
      location: 'Paris, FR',
      status: 'Inactive',
      spent: '$1050.34',
      avatarUrl: 'https://i.pravatar.cc/32?u=11',
    },
    {
      id: 12,
      name: 'Leo Nash',
      email: 'leo@example.com',
      location: 'Tokyo, JP',
      status: 'Active',
      spent: '$3760.18',
      avatarUrl: 'https://i.pravatar.cc/32?u=12',
    },
    {
      id: 13,
      name: 'Mia Park',
      email: 'mia@example.com',
      location: 'New York, US',
      status: 'Inactive',
      spent: '$1390.80',
      avatarUrl: 'https://i.pravatar.cc/32?u=13',
    },
    {
      id: 14,
      name: 'Nick Carter',
      email: 'nick@example.com',
      location: 'Berlin, DE',
      status: 'Active',
      spent: '$4520.00',
      avatarUrl: 'https://i.pravatar.cc/32?u=14',
    },
    {
      id: 15,
      name: 'Olivia Wilde',
      email: 'olivia@example.com',
      location: 'Paris, FR',
      status: 'Active',
      spent: '$4999.99',
      avatarUrl: 'https://i.pravatar.cc/32?u=15',
    },
    {
      id: 16,
      name: 'Paul King',
      email: 'paul@example.com',
      location: 'Tokyo, JP',
      status: 'Inactive',
      spent: '$2655.40',
      avatarUrl: 'https://i.pravatar.cc/32?u=16',
    },
    {
      id: 17,
      name: 'Quincy Dean',
      email: 'quincy@example.com',
      location: 'New York, US',
      status: 'Active',
      spent: '$3100.99',
      avatarUrl: 'https://i.pravatar.cc/32?u=17',
    },
    {
      id: 18,
      name: 'Rachel Kim',
      email: 'rachel@example.com',
      location: 'Berlin, DE',
      status: 'Active',
      spent: '$1280.65',
      avatarUrl: 'https://i.pravatar.cc/32?u=18',
    },
    {
      id: 19,
      name: 'Sam Torres',
      email: 'sam@example.com',
      location: 'Paris, FR',
      status: 'Inactive',
      spent: '$880.00',
      avatarUrl: 'https://i.pravatar.cc/32?u=19',
    },
    {
      id: 20,
      name: 'Tina Ray',
      email: 'tina@example.com',
      location: 'Tokyo, JP',
      status: 'Active',
      spent: '$3010.77',
      avatarUrl: 'https://i.pravatar.cc/32?u=20',
    },
  ];

  goToEditPage() {
    this.router.navigate(['/deshbord/customer/edit']);
  }
  goToViewPage() {
    this.router.navigate(['/deshbord/customer/details']);
  }
}
