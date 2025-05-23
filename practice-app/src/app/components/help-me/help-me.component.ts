import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-help-me',
  imports: [  ],
  templateUrl: './help-me.component.html',
  styleUrl: './help-me.component.css'
})
export class HelpMeComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
