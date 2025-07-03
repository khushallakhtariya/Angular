import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuycarService } from '../../../../../services/buycar.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-buy-car-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './buy-car-api.component.html',
  styleUrls: ['./buy-car-api.component.css'],
})
export class BuyCarApiComponent implements OnInit {
  cars: any[] = [];
  paginatedCars: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  // Pagination controls
  currentPage: number = 1;
  pageSize: number = 5;

  constructor(private buycarService: BuycarService, private location: Location) {}

  ngOnInit(): void {
    this.loadCars();
  }
  goBack(): void {
    this.location.back();
  }

  loadCars(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.buycarService.getCarsBuy().subscribe({
      next: (data) => {
        this.cars = data.map((car: any) => ({
          ...car,
          isFavorite: false,
        }));
        this.updatePaginatedCars();
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load car listings.';
        this.isLoading = false;
        console.error(error);
      },
    });
  }

  updatePaginatedCars(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedCars = this.cars.slice(start, end);
  }

  retryLoading(): void {
    this.loadCars();
  }

  toggleFavorite(car: any): void {
    car.isFavorite = !car.isFavorite;
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePaginatedCars();
  }

  get totalPages(): number {
    return Math.ceil(this.cars.length / this.pageSize); 
  }

  get fromIndex(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get toIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.cars.length);
  }
}
