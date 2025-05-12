import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule,RouterModule],
  templateUrl: './profile.component.html',

})
export class ProfileComponent {
  activeTab: string = 'overview';
}
