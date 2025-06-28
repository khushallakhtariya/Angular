import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarapiService } from '../../../../../services/carapi.service';
import { CommonModule } from '@angular/common';
import { CarApiNavbarComponent } from "../car-api-navbar/car-api-navbar.component";
import {   RouterLink } from '@angular/router';

@Component({
  selector: 'app-cars-api',
  imports: [HttpClientModule, CommonModule, CarApiNavbarComponent,RouterLink],
  templateUrl: './cars-api.component.html',
  styleUrl: './cars-api.component.css',
})
export class CarsApiComponent {
  carList: any[] = []; // use carList directly
isLoading: any;

  constructor(private carApi: CarapiService) {}

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
}
