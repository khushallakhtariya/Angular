import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuycarService } from '../../../../../services/buycar.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-contect-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, MatSnackBarModule],
  templateUrl: './car-contect-page.component.html',
  styleUrls: ['./car-contect-page.component.css'],
})
export class CarContectPageComponent implements OnInit {
  carsByLocation: any[] = [];
  isLoading = true;
  errorMessage = '';
  locationParam = '';

  formData = {
    name: '',
    email: '',
    message: '',
  };

  constructor(
    private buycarService: BuycarService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.locationParam = this.route.snapshot.paramMap.get('location') || '';
    this.loadCarsByLocation(this.locationParam);
  }

  loadCarsByLocation(location: string): void {
    this.buycarService.getCarsBuy().subscribe({
      next: (cars) => {
        this.carsByLocation = cars.filter(
          (car: any) => car.location?.toLowerCase() === location.toLowerCase()
        );
        if (this.carsByLocation.length === 0) {
          this.errorMessage = 'No cars found in this location.';
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to load cars.';
        this.isLoading = false;
        this.snackBar.open('Error loading cars', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
    });
  }

  submitForm(car: any, form: any): void {
    if (form.valid) {
      const { name, email, message } = this.formData;
  
      this.snackBar.open(
        `Message sent for ${car.brand} ${car.model}`,
        'Close',
        {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        }
      );
  
      // Reset form data and state
      this.formData = { name: '', email: '', message: '' };
      form.resetForm();
    }
  }
  goBack(): void {
    this.location.back();
  }
}
