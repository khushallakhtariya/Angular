import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css'],
})
export class FileManagerComponent {
  renameFormVisible = false;
  renameInput = '';
  successMessage = '';
  dropdownOpen = false;
  openDropdownId: string | null = null;
  showCreateFolder = false;
  newFolderName = '';

  selectedItem: {
    name: string;
    icon?: string;
    iconColor?: string;
    size?: string;
    modifiedDate?: string;
    owner?: string;
    description?: string;
    createdDate?: string;
  } | null = null;

  @HostListener('document:click', ['$event'])
handleDocumentClick(event: MouseEvent) {
  // Close dropdown if click is outside
  if (this.openDropdownId && !(event.target as HTMLElement).closest('.dropdown-container')) {
    this.openDropdownId = null;
  }
}
  folders = [
    {
      name: 'Project_Files',
      size: '21.8 MB',
      createdDate: '2024-01-10',
      modifiedDate: '2024-05-20',
      owner: 'Alice Johnson',
      description: 'Main project source files and resources.',
    },
    {
      name: 'Documents',
      size: '10.5 MB',
      createdDate: '2023-12-15',
      modifiedDate: '2024-04-30',
      owner: 'Bob Smith',
      description: 'General documents and notes.',
    },
    {
      name: 'Team_Resources',
      size: '783.1 kB',
      createdDate: '2024-02-05',
      modifiedDate: '2024-05-10',
      owner: 'Carol White',
      description: 'Shared resources for the team.',
    },
    {
      name: 'Client_Data',
      size: '5.4 MB',
      createdDate: '2023-11-25',
      modifiedDate: '2024-05-18',
      owner: 'David Lee',
      description: 'Data and reports related to clients.',
    },
    {
      name: 'Backup_Files',
      size: '2.5 MB',
      createdDate: '2023-10-10',
      modifiedDate: '2024-05-01',
      owner: 'Emily Davis',
      description: 'Backup copies of important files.',
    },
  ];

  files = [
    {
      name: 'Tech design.pdf',
      size: '2.2 MB',
      icon: 'picture_as_pdf',
      iconColor: 'text-red-500',
      createdDate: '2024-03-01',
      modifiedDate: '2024-05-15',
      owner: 'Alice Johnson',
      description: 'Technical design document for project.',
    },
    {
      name: 'Financial_Report.xlsx',
      size: '1.5 MB',
      icon: 'grid_on',
      iconColor: 'text-green-600',
      createdDate: '2024-02-20',
      modifiedDate: '2024-05-10',
      owner: 'Bob Smith',
      description: 'Quarterly financial report.',
    },
    {
      name: 'Modern_Laputa.jpg',
      size: '139.2 kB',
      icon: 'image',
      iconColor: 'text-green-500',
      createdDate: '2024-01-15',
      modifiedDate: '2024-04-28',
      owner: 'Carol White',
      description: 'Artwork for website banner.',
    },
    {
      name: 'Project_Presentation.pptx',
      size: '3.1 MB',
      icon: 'slideshow',
      iconColor: 'text-orange-500',
      createdDate: '2024-04-01',
      modifiedDate: '2024-05-22',
      owner: 'David Lee',
      description: 'Project overview presentation slides.',
    },
    {
      name: 'Network_Diagram.fig',
      size: '123.5 kB',
      icon: 'account_tree',
      iconColor: 'text-gray-700',
      createdDate: '2024-03-15',
      modifiedDate: '2024-05-18',
      owner: 'Emily Davis',
      description: 'Network architecture diagrams.',
    },
    {
      name: 'Project_Summary.docx',
      size: '987.7 kB',
      icon: 'description',
      iconColor: 'text-blue-600',
      createdDate: '2024-02-10',
      modifiedDate: '2024-05-14',
      owner: 'Alice Johnson',
      description: 'Summary document of project milestones.',
    },
    {
      name: 'Gradient_store.jpg',
      size: '157.9 kB',
      icon: 'image',
      iconColor: 'text-green-500',
      createdDate: '2024-01-25',
      modifiedDate: '2024-04-30',
      owner: 'Bob Smith',
      description: 'Image assets for marketing.',
    },
    {
      name: 'Colorful_donut.jpg',
      size: '216.8 kB',
      icon: 'image',
      iconColor: 'text-green-500',
      createdDate: '2024-01-28',
      modifiedDate: '2024-05-02',
      owner: 'Carol White',
      description: 'Graphic design sample.',
    },
    {
      name: 'Annual_Report.pdf',
      size: '1.7 MB',
      icon: 'picture_as_pdf',
      iconColor: 'text-red-500',
      createdDate: '2023-12-31',
      modifiedDate: '2024-05-19',
      owner: 'David Lee',
      description: 'Annual financial report document.',
    },
    {
      name: 'Research_Paper.docx',
      size: '987.7 kB',
      icon: 'description',
      iconColor: 'text-blue-600',
      createdDate: '2024-02-22',
      modifiedDate: '2024-05-12',
      owner: 'Emily Davis',
      description: 'Research paper on new technology trends.',
    },
    {
      name: 'Budget_Report.pdf',
      size: '1.7 MB',
      icon: 'picture_as_pdf',
      iconColor: 'text-red-500',
      createdDate: '2024-03-01',
      modifiedDate: '2024-05-16',
      owner: 'Alice Johnson',
      description: 'Budget planning report.',
    },
    {
      name: 'Marketing_Strategy.pptx',
      size: '2.2 MB',
      icon: 'slideshow',
      iconColor: 'text-orange-500',
      createdDate: '2024-04-10',
      modifiedDate: '2024-05-20',
      owner: 'Bob Smith',
      description: 'Marketing strategy presentation.',
    },
    {
      name: 'Architecture_Diagram.fig',
      size: '456.8 kB',
      icon: 'account_tree',
      iconColor: 'text-gray-700',
      createdDate: '2024-03-20',
      modifiedDate: '2024-05-17',
      owner: 'Carol White',
      description: 'System architecture diagrams.',
    },
    {
      name: 'Lone_bear.jpg',
      size: '1.7 MB',
      icon: 'image',
      iconColor: 'text-green-500',
      createdDate: '2024-01-05',
      modifiedDate: '2024-05-18',
      owner: 'David Lee',
      description: 'Nature photography.',
    },
    {
      name: 'Meeting_Minutes.docx',
      size: '789.2 kB',
      icon: 'description',
      iconColor: 'text-blue-600',
      createdDate: '2024-04-15',
      modifiedDate: '2024-05-21',
      owner: 'Emily Davis',
      description: 'Minutes from the last project meeting.',
    },
  ];
  showShareModal = false;
  shareEmail = '';

  openShareModal() {
    this.showShareModal = true;
  }

  closeShareModal() {
    this.showShareModal = false;
    this.shareEmail = '';
  }

  submitShareForm(event: Event) {
    event.preventDefault();
    // Simulate sending the link to the email address
    this.successMessage = `Link shared with ${this.shareEmail}`;
    this.closeShareModal();
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }
  toggleDropdown(id: string) {
    this.openDropdownId = this.openDropdownId === id ? null : id;
    if (this.showCreateFolder || this.renameFormVisible || this.showShareModal) {
      this.openDropdownId = null;
      return;
      this.openDropdownId = this.openDropdownId === id ? null : id;
    }
  }

  isDropdownOpen(id: string): boolean {
    return this.openDropdownId === id;
  }

  deleteFile(name: string) {
    this.files = this.files.filter((file) => file.name !== name);
    this.openDropdownId = null;
    if (this.selectedItem?.name === name) {
      this.closeSlider();
    }
    this.successMessage = 'File has been successfully deleted.';
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }

  deleteFolder(name: string) {
    this.folders = this.folders.filter((folder) => folder.name !== name);
    this.openDropdownId = null;
    if (this.selectedItem?.name === name) {
      this.closeSlider();
    }
    this.successMessage = 'Folder has been successfully deleted.';
    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }

  openSlider(item: {
    name: string;
    icon?: string;
    iconColor?: string;
    size?: string;
    createdDate?: string;
    modifiedDate?: string;
    owner?: string;
    description?: string;
  }) {
    this.selectedItem = item;
  }

  closeSlider() {
    this.selectedItem = null;
  }

  // Show rename form and set current name as default input
  openRenameForm(item: { name: string }) {
    this.openDropdownId = null;
    this.renameFormVisible = true;
    this.renameInput = item.name;
    this.selectedItem = item;
    this.openDropdownId = null;
  }

  // Hide rename form and clear input
  closeRenameForm() {
    this.openDropdownId = null;
    this.renameFormVisible = false;
    this.renameInput = '';
  }

  renameItem() {
    this.openDropdownId = null;
    if (!this.renameInput.trim()) return; // no empty names

    if (!this.selectedItem) return;

    // Rename in files
    const fileIndex = this.files.findIndex(
      (f) => f.name === this.selectedItem!.name
    );
    if (fileIndex !== -1) {
      this.files[fileIndex].name = this.renameInput.trim();
    } else {
      // Rename in folders
      const folderIndex = this.folders.findIndex(
        (f) => f.name === this.selectedItem!.name
      );
      if (folderIndex !== -1) {
        this.folders[folderIndex].name = this.renameInput.trim();
      }
    }

    // Update selectedItem's name
    this.selectedItem.name = this.renameInput.trim();

    this.successMessage = 'Item renamed successfully.';
    this.closeRenameForm();

    setTimeout(() => {
      this.successMessage = '';
    }, 3000);
  }
  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;


  createNewFolder() {
    this.openDropdownId = null;
    const folderName = this.newFolderName.trim();
    if (!folderName) return;

    const exists = this.folders.some(folder => folder.name === folderName);
    if (exists) {
      // Optionally show a validation message instead of alert
      return;
    }

    this.folders.push({
      name: folderName,
      size: '0 MB',
      createdDate: new Date().toISOString().split('T')[0],
      modifiedDate: new Date().toISOString().split('T')[0],
      owner: 'Unknown',
      description: 'New folder',
    });

    // Reset form and close modal
    this.newFolderName = '';
    this.showCreateFolder = false;
  }

  cancelCreateFolder() {
    this.openDropdownId = null;
    this.newFolderName = '';
    this.showCreateFolder = false;
  }
  triggerUpload() {
    this.openDropdownId = null;
    this.fileInputRef.nativeElement.click();
    this.fileInputRef.nativeElement.value = '';
  }

  handleFileUpload(event: Event) {
    this.openDropdownId = null;
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      console.log('File uploaded:', file.name);

    }
 
    input.value = '';
  }
}
