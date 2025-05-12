import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css',
  standalone: true,
  imports:[CommonModule]
})
export class DocumentsComponent {

  fileGroups = [
    {
      name: 'Reports',
      files: [
        { name: 'Project Reqs..', modified: '3 days ago' },
        { name: 'CRM App Docs..', modified: '3 days ago' },
        { name: 'User CRUD Styles', modified: '4 days ago' },
        { name: 'Metronic Logo', modified: '5 days ago' },
        { name: 'UTAIR CRM API Co..', modified: '2 weeks ago' }
      ]
    },
    {
      name: 'Finance',
      files: [
        { name: 'Orders backup', modified: '1 week ago' }
      ]
    },
    {
      name: 'Customers',
      files: [] 
    },
    {
      name: 'Other Projects',
      files: [
        { name: 'Tower Hill App..', modified: '3 weeks ago' }
      ]
    }
  ];

  // Function to determine recency color
  getRecencyColor(dateString: string): string {
    if (dateString.includes('day') || dateString.includes('today')) {
      const days = parseInt(dateString);
      if (days <= 1) return 'text-green-500';
      if (days <= 3) return 'text-blue-500';
      return 'text-yellow-500';
    }
    if (dateString.includes('week')) return 'text-orange-500';
    return 'text-gray-500';
  }
}