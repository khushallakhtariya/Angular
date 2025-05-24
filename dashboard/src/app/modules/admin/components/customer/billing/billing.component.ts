import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing',
  imports: [CommonModule,FormsModule],
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.css'
})
export class BillingComponent {
  constructor(private router: Router) {}
  activeTab: string = 'billing';



  purchases = [
    { name: 'Acme pro plan (monthly)', status: 'Pending', date: '02/10/2025', amount: '$59.90' },
    { name: 'Acme pro plan (monthly)', status: 'Paid', date: '01/13/2025', amount: '$59.90' },
    { name: 'Acme pro plan (monthly)', status: 'Paid', date: '12/13/2024', amount: '$59.90' },
  ];

  addresses = {
    billing: ['123 Main St', 'New York', '10001', 'United States'],
    delivery: ['123 Main St', 'New York', '10001', 'United States'],
  };

  paymentMethods = [
    { type: 'VISA', name: 'Angelina Gotelli', lastDigits: '0392', expiry: 'Dec 2025', isPrimary: true },
    { type: 'Mastercard', name: 'Angelina Gotelli', lastDigits: '8461', expiry: 'Jun 2025', isPrimary: false },
  ];

  selectedMethod: any = null;
  isModalOpen = false;

  openEditModal(method: any) {
    this.selectedMethod = { ...method };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  updateCard() {
    // Update logic (e.g., call API or update local array)
    const index = this.paymentMethods.findIndex(m => m.lastDigits === this.selectedMethod.lastDigits);
    if (index !== -1) {
      this.paymentMethods[index] = { ...this.selectedMethod };
    }
    this.closeModal();
  }

  goToEditPage() {
    this.router.navigate(['/deshbord/customer/edit']);
  }
}
