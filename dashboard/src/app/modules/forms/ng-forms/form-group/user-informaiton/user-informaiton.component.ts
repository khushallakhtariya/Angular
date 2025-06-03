import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-informaiton',
  imports: [CommonModule,FormsModule,],
  templateUrl: './user-informaiton.component.html',
  styleUrl: './user-informaiton.component.css'
})
export class UserInformaitonComponent {
  userId: number | null = null;
  selectedUser: any = null;
  loading = false;
  error = '';
  editing = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.userId = params.has('id') ? +params.get('id')! : null;
      if (this.userId) {
        this.fetchUserById(this.userId);
      } else {
        this.selectedUser = null;
      }
    });
  }

  fetchUserById(id: number) {
    this.loading = true;
    this.error = '';
    this.selectedUser = null;

    // API to get one user by id
    this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe({
      next: (user) => {
        this.selectedUser = user;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load user details';
        this.loading = false;
      }
    });
  }
  toggleEdit() {
    this.editing = !this.editing;
  }

  saveChanges() {
    // Simulate saving data to API
    console.log('Saving changes', this.selectedUser);
    this.editing = false;
  }
}
