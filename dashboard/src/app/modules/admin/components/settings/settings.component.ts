import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-settings',
  imports: [FormsModule, CommonModule, MatSnackBarModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) {}
  originalSettings: any;
  settings: any = {
    fullName: '',
    phone: '',
    company: '',
    companySite: '',
    country: '',
    language: '',
    timezone: '',
    currency: '',
    emailNotifications: true,
    smsNotifications: false,
    marketingCommunications: false,
  };

  ngOnInit(): void {
    const saved = localStorage.getItem('account-settings');
    if (saved) {
      this.settings = JSON.parse(saved);
    }
    this.originalSettings = JSON.parse(JSON.stringify(this.settings));
  }

  onSave(): void {
    localStorage.setItem('account-settings', JSON.stringify(this.settings));
    this.originalSettings = JSON.parse(JSON.stringify(this.settings));
    this.snackBar.open('Settings saved!', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['snackbar-success'],
    });
  }

  onCancel(): void {
    this.settings = JSON.parse(JSON.stringify(this.originalSettings));
  }
}
