import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule } from '@angular/common/http';
import { Location } from '@angular/common';

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarapiService } from '../../../../../services/carapi.service';

@Component({
  selector: 'app-all-cars',
  imports: [HttpClientJsonpModule,CommonModule,RouterLink],
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.css'
})
export class AllCarsComponent {
  carList: any[] = []; // use carList directly

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
}
