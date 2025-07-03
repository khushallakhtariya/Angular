import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarapiService } from '../../../../../services/carapi.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-share-car',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatSnackBarModule],
  templateUrl: './share-car.component.html',
  styleUrls: ['./share-car.component.css'],
})
export class ShareCarComponent implements OnInit{
  carList: any[] = [];
  shareUrl: string = window.location.href;

  constructor(
    private carApi: CarapiService,
    private location: Location,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const carId = this.route.snapshot.paramMap.get('id');
    this.shareUrl = `${window.location.origin}/cars/all/view/${carId}`; 
  }

  copyLink() {
    const carId = this.route.snapshot.paramMap.get('id');
    const fullLink = `${window.location.origin}/cars/all/view/${carId}`;
    navigator.clipboard.writeText(fullLink).then(() => {
      this.snackBar.open('Share link copied to clipboard!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    });
  }

  cancelShare() {
    this.location.back();
  }
}
