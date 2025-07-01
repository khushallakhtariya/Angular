import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarapiService } from '../../../../services/carapi.service';
import { CarApiNavbarComponent } from "../car-api-navbar/car-api-navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cars-api',
  standalone: true,
  imports: [HttpClientModule, CommonModule, CarApiNavbarComponent, RouterLink],
  templateUrl: './cars-api.component.html',
  styleUrl: './cars-api.component.css',
})
export class CarsApiComponent implements OnInit {
  carList: any[] = [];
  visibleCars: any[] = [];
  isLoading: boolean = false;
  batchSize: number = 5;
  initialCount: number = 5;
  allLoaded: boolean = false;

  constructor(private carApi: CarapiService) {}

  ngOnInit(): void {
    this.carApi.getCars().subscribe({
      next: (res) => {
        this.carList = res;
        this.visibleCars = this.carList.slice(0, this.initialCount);
        this.allLoaded = this.visibleCars.length >= this.carList.length;
      },
      error: (err) => {
        console.error('Failed to load cars', err);
      },
    });
  }

  loadMoreCars(): void {
    if (this.allLoaded || this.isLoading) return;

    this.isLoading = true;

    setTimeout(() => {
      const nextCount = this.visibleCars.length + this.batchSize;
      this.visibleCars = this.carList.slice(0, nextCount);
      this.isLoading = false;
      this.allLoaded = this.visibleCars.length >= this.carList.length;
    }, 3000); // 3-second loading simulation
  }
}
