import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarapiService } from '../../../../../services/carapi.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-share-car',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './share-car.component.html',
  styleUrl: './share-car.component.css'
})
export class ShareCarComponent {
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

}
