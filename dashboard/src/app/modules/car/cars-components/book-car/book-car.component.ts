import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarapiService } from '../../../../services/carapi.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-car',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, MatSnackBarModule],
  templateUrl: './book-car.component.html',
  styleUrl: './book-car.component.css',
})
export class BookCarComponent {
  message: string | undefined;
  carList: any[] = [];
  filteredCars: any[] = [];
  searchText: string = '';
  selectedCar: any = null;
  selectedLocation: string = '';
  pickupDate: string = '';
  dropDate: string = '';

  constructor(private location: Location, private carApi: CarapiService,private snackBar: MatSnackBar,) {}

  ngOnInit(): void {
    this.carApi.getCars().subscribe(
      (res: any) => {
        this.carList = res;
      },
      (err) => {
        console.error('Error loading cars:', err);
      }
    );
  }

  filterCars(): void {
    const query = this.searchText.toLowerCase();
    if (query.length === 0) {
      this.filteredCars = [];
      return;
    }
    this.filteredCars = this.carList.filter((car) =>  
      `${car.brand} ${car.model}`.toLowerCase().includes(query)
    );
  }

  selectCar(car: any): void {
    this.searchText = `${car.brand} ${car.model}`;
    this.selectedCar = car;
    this.selectedLocation = car.location || '';
    this.filteredCars = [];
  }

  bookCar(): void {
    this.snackBar.open('Car booked successfully!', 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['snackbar-success'],
      
    });
  }
  searchClose() {
    this.searchText = '';
    this.filteredCars = [];
  }
  roomClose() {
    this.selectedLocation = '';
    this.filteredCars = [];
  }
  goBack(): void {
    this.location.back();
  }
}
