import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewcarService } from '../../../../../services/newcar.service';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: 'app-details-new-car',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatProgressSpinnerModule],
  templateUrl: './details-new-car.component.html',
  styleUrls: ['./details-new-car.component.css'],
})
export class DetailsNewCarComponent implements OnInit {
  brandParam: string = '';
  cars: any[] = [];
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private newcarService: NewcarService
  ) {}

  ngOnInit(): void {
    this.brandParam = this.route.snapshot.paramMap.get('brand') || '';
    if (this.brandParam) {
      this.getNewCarsByBrand();
    } else {
      this.error = 'No brand specified in route.';
      this.loading = false;
    }
  }

  getNewCarsByBrand(): void {
    this.newcarService.getNewCarByBrand(this.brandParam).subscribe({
      next: (data) => {
        this.cars = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load car details.';
        this.loading = false;
        console.error(err);
      },
    });
  }
}
