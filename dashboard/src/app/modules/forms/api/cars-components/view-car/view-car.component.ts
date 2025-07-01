import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarapiService } from '../../../../../services/carapi.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-view-car',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, RouterModule ],
  templateUrl: './view-car.component.html',
  styleUrl: './view-car.component.css',
})
export class ViewCarComponent {
  isLoading: any;
  car: any;

  constructor(private route: ActivatedRoute, private carApi: CarapiService, private location: Location, private router: Router) {}

  ngOnInit(): void {
    const carId = Number(this.route.snapshot.paramMap.get('id'));
    this.carApi.getCarById(carId).subscribe(
      (res) => {
        this.car = res;
        this.isLoading = false;
      },
      (err) => {
        console.error(err);
        this.isLoading = false;
      }
    );
  }
  goBack(): void {
    this.location.back();
  }
  bookCar(): void {
    if (this.car && this.car.id) {
      this.router.navigate(['forms/cars/book', this.car.id]);
    } else {
      console.error('Car object or ID is undefined');
    }
  }
}
