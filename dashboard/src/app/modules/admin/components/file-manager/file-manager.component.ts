import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.css',
})
export class FileManagerComponent {
  dropdownOpen = false;
  openDropdownId: string | null = null;
  folders = [
    { name: 'Project_Files', size: '21.8 MB' },
    { name: 'Documents', size: '10.5 MB' },
    { name: 'Team_Resources', size: '783.1 kB' },
    { name: 'Client_Data', size: '5.4 MB' },
    { name: 'Backup_Files', size: '2.5 MB' },
  ];

  files = [
    {
      name: 'Tech design.pdf',
      size: '2.2 MB',
      icon: 'picture_as_pdf',
      iconColor: 'text-red-500',
    },
    {
      name: 'Financial_Report.xlsx',
      size: '1.5 MB',
      icon: 'grid_on',
      iconColor: 'text-green-600',
    },
    {
      name: 'Modern_Laputa.jpg',
      size: '139.2 kB',
      icon: 'image',
      iconColor: 'text-green-500',
    },
    {
      name: 'Project_Presentation.pptx',
      size: '3.1 MB',
      icon: 'slideshow',
      iconColor: 'text-orange-500',
    },
    {
      name: 'Network_Diagram.fig',
      size: '123.5 kB',
      icon: 'account_tree',
      iconColor: 'text-gray-700',
    },
    {
      name: 'Project_Summary.docx',
      size: '987.7 kB',
      icon: 'description',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Gradient_store.jpg',
      size: '157.9 kB',
      icon: 'image',
      iconColor: 'text-green-500',
    },
    {
      name: 'Colorful_donut.jpg',
      size: '216.8 kB',
      icon: 'image',
      iconColor: 'text-green-500',
    },
    {
      name: 'Annual_Report.pdf',
      size: '1.7 MB',
      icon: 'picture_as_pdf',
      iconColor: 'text-red-500',
    },
    {
      name: 'Research_Paper.docx',
      size: '987.7 kB',
      icon: 'description',
      iconColor: 'text-blue-600',
    },
    {
      name: 'Budget_Report.pdf',
      size: '1.7 MB',
      icon: 'picture_as_pdf',
      iconColor: 'text-red-500',
    },
    {
      name: 'Marketing_Strategy.pptx',
      size: '2.2 MB',
      icon: 'slideshow',
      iconColor: 'text-orange-500',
    },
    {
      name: 'Architecture_Diagram.fig',
      size: '456.8 kB',
      icon: 'account_tree',
      iconColor: 'text-gray-700',
    },
    {
      name: 'Lone_bear.jpg',
      size: '1.7 MB',
      icon: 'image',
      iconColor: 'text-green-500',
    },
    {
      name: 'Meeting_Minutes.docx',
      size: '789.2 kB',
      icon: 'description',
      iconColor: 'text-blue-600',
    },
  ];

  toggleDropdown(id: string) {
    this.openDropdownId = this.openDropdownId === id ? null : id;
  }

  isDropdownOpen(id: string): boolean {
    return this.openDropdownId === id;
  }
  
}
