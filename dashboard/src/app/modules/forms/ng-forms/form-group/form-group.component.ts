import { Component, Inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FilterUsersPipe } from '../../../../pipes/filter-users.pipe';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    FilterUsersPipe,
    FormsModule,
  ],
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent {
  userArray: any[] = [];
  successMessage = signal<string | null>(null);
  userToDelete = signal<number | null>(null);

  // Pagination state
  totalUsers = 100;
  pageSize = 10;
  currentPage = 0;
  searchTerm!: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient
  ) {
    this.fetchUsers();
  }

  // Fetch users with pagination
  fetchUsers() {
    const params = new HttpParams()
      .set('_page', (this.currentPage + 1).toString())
      .set('_limit', this.pageSize.toString());

    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users', {
        params,
        observe: 'response',
      })
      .subscribe({
        next: (response) => {
          this.userArray = response.body || [];
          const total = response.headers.get('X-Total-Count');
          if (total) this.totalUsers = +total;
        },
        error: (err) => {
          console.error('Error fetching users:', err);
          alert('Error fetching users');
        },
      });
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.fetchUsers();
  }

  confirmDelete(id: number) {
    this.userToDelete.set(id);
  }

  deleteConfirmed() {
    const id = this.userToDelete();
    if (id !== null) {
      this.userArray = this.userArray.filter((user) => user.id !== id);
      this.successMessage.set('User deleted successfully!');
      this.userToDelete.set(null);
      setTimeout(() => this.successMessage.set(null), 3000);
    }
  }

  cancelDelete() {
    this.userToDelete.set(null);
  }

  onClose() {
    this.successMessage.set(null);
  }

  openUserInNewTab(user: any): void {
    const url = `${window.location.origin}/forms/api-user/user-details/${user.id}`;
    window.open(url, '_blank');
  }
}
