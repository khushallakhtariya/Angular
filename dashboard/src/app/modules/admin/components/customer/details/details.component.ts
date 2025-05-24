import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingComponent } from "../billing/billing.component";
import { ActivityComponent } from "../activity/activity.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule, BillingComponent, ActivityComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private router: Router) {}
  activeTab: string = 'billing';

  user = {
    name: 'Angelina Gotelli',
    email: 'carolyn_h@hotmail.com',
    phone: '+12-123-1234',
    dob: '10/10/1992',
    lastOnline: '12 Aug 2024 08:10 AM',
    avatarUrl: 'https://ecme-next.themenate.net/img/avatars/thumb-10.jpg',
  };



  goToEditPage() {
    this.router.navigate(['/deshbord/customer/edit']);
  }
}
