import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '@angular/common';
import { CarapiService } from '../../../../services/carapi.service';

@Component({
  selector: 'app-contact-car',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact-car.component.html',
  styleUrl: './contact-car.component.css',
})
export class ContactCarComponent implements OnInit {
  message: string | undefined;
  isSubmitting = false;
  today = new Date();
  carList: any[] = [];
  searchTerm: string = '';
  filteredCars: any[] = [];
  selectedCar: any = null;

  constructor(private carApi: CarapiService, private location: Location) {}

  ngOnInit(): void {
    this.carApi.getCars().subscribe(
      (res) => {
        this.carList = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  filterCars() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCars = this.carList.filter(
      (car) =>
        car.brand.toLowerCase().includes(term) ||
        car.model.toLowerCase().includes(term)
    );
  }

  selectCar(car: any) {
    this.selectedCar = car;
    this.searchTerm = `${car.brand} ${car.model}`;
    this.filteredCars = [];
  }

  submitForm(form: NgForm) {
    if (!this.selectedCar) return;

    if (form.valid) {
      this.isSubmitting = true;
      setTimeout(() => {
        this.message = `Thank you! Your inquiry for ${this.selectedCar.brand} ${this.selectedCar.model} has been submitted. We’ll contact you soon.`;
        form.resetForm();
        this.selectedCar = null;
        this.searchTerm = '';
        this.isSubmitting = false;

        setTimeout(() => {
          this.message = undefined;
        }, 5000);
      }, 1500);
    }
  }
  searchClose() {
    this.searchTerm = '';
    this.filteredCars = [];
  }
}
