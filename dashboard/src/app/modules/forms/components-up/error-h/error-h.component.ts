import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, finalize, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-error-h',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './error-h.component.html',
  styleUrls: ['./error-h.component.css']
})
export class ErrorHComponent implements OnInit {
  users: any[] = [];
  errorMessage: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.loading = true;
    this.errorMessage = '';

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError(this.handleError),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (data) => {
          this.users = data;
        },
        error: (err) => {
          this.errorMessage = err;
        }
      });
  }

  private handleError(error: HttpErrorResponse) {
    let message = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      message = `Client-side error: ${error.error.message}`;
    } else {
      // Backend error
      message = `Server error (${error.status}): ${error.message}`;
    }
    return throwError(() => message);
  }
}
