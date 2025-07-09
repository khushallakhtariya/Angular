import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewcarService } from '../../../../../services/newcar.service';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Location } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-car-page',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './new-car-page.component.html',
  styleUrls: ['./new-car-page.component.css'],
})
export class NewCarPageComponent implements OnInit {
  newCars: any[] = [];
  paginatedCars: any[] = [];
  loading = true;
  error = '';
  currentPage = 1;
  pageSize = 6;
  totalItems = 0;

  constructor(private newcarService: NewcarService, private location: Location) {}

  ngOnInit(): void {
    this.newcarService.getNewCars().subscribe({
      next: (data) => {
        this.newCars = data;
        this.totalItems = data.length;
        this.setPage(1);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load new cars.';
        console.error(err);
        this.loading = false;
      },
    });
  }
  goBack(): void {
    this.location.back();
  }

  setPage(page: number): void {
    this.currentPage = page;
    const start = (page - 1) * this.pageSize;
    this.paginatedCars = this.newCars.slice(start, start + this.pageSize);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  get fromIndex(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get toIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalItems);
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
