import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuycarService } from '../../../../../services/buycar.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-buypage',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatSnackBarModule, FormsModule],
  templateUrl: './car-buypage.component.html',
  styleUrls: ['./car-buypage.component.css'],
})
export class CarBuypageComponent implements OnInit {
  car: any = null;
  isLoading = true;
  errorMessage = '';
  brandParam = '';

  step = 1;
  formData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: '',
  };

  paymentMethods = [
    { value: 'cash', label: 'Cash' },
    { value: 'loan', label: 'Bank Loan' },
    { value: 'upi', label: 'UPI' },
    { value: 'card', label: 'Credit/Debit Card' },
  ];

  constructor(
    private buycarService: BuycarService,
    private snackBar: MatSnackBar,
    public route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.brandParam = this.route.snapshot.paramMap.get('brand') || '';
    this.loadCar();
  }

  loadCar(): void {
    this.buycarService.getCarsBuy().subscribe({
      next: (cars) => {
        const match = cars.find(
          (car: any) =>
            car.brand.toLowerCase() === this.brandParam.toLowerCase()
        );
        if (match) {
          this.car = match;
        } else {
          this.errorMessage = 'No car found for this brand.';
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage =
          'Failed to load car details. Please try again later.';
        this.isLoading = false;
        this.showSnackbar('Error loading car data', 'error');
      },
    });
  }

  getStepLabel(stepNum: number): string {
    switch (stepNum) {
      case 1:
        return 'Buyer Info';
      case 2:
        return 'Car Details';
      case 3:
        return 'Payment';
      case 4:
        return 'Review';
      default:
        return '';
    }
  }

  nextStep() {
    if (this.step === 1 && !this.isStep1Valid()) {
      this.showSnackbar('Please fill all required fields correctly', 'error');
      return;
    }
    if (this.step === 3 && !this.isStep3Valid()) {
      this.showSnackbar('Please provide address and payment method', 'error');
      return;
    }
    if (this.step < 4) this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

  isStep1Valid(): boolean {
    const { name, email, phone } = this.formData;
    return (
      name.trim() !== '' &&
      email.includes('@') &&
      email.includes('.') &&
      phone.length >= 10
    );
  }

  isStep3Valid(): boolean {
    const { address, paymentMethod } = this.formData;
    return address.trim() !== '' && paymentMethod !== '';
  }

  submitForm(car: any): void {
    if (this.isStep1Valid() && this.isStep3Valid()) {
      this.showSnackbar(
        `Purchase request submitted for ${car.brand} ${car.model}`,
        'success'
      );

      // Reset form
      this.formData = {
        name: '',
        email: '',
        phone: '',
        address: '',
        paymentMethod: '',
      };
      setTimeout(() => {
        this.router.navigate(['/cars/buy']);
      }, 2000);
    } else {
      this.showSnackbar(
        'Please fill in all required fields correctly.',
        'error'
      );
    }
  }

  showSnackbar(message: string, type: 'success' | 'error') {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass:
        type === 'success'
          ? ['bg-green-600', 'text-white']
          : ['bg-red-600', 'text-white'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  goBack(): void {
    this.location.back();
  }
}
