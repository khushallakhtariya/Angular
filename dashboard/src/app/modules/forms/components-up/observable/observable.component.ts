import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {
  data: number[] = [];

  myObservable = new Observable<number>((observer) => {
    const values = [1, 2, 3, 4, 5, 6];
    values.forEach((val, index) => {
      setTimeout(() => observer.next(val), (index + 1) * 1000);
    });

    setTimeout(() => observer.complete(), (values.length + 1) * 1000);
  });

  GetAsyncData() {
    this.data = []; // Reset before starting

    this.myObservable.subscribe({
      next: (val: number) => {
        this.data.push(val); // Append value to the array
      },
      error: (err) => {
        console.error('Error:', err);
      },
      complete: () => {
        console.log('Observable completed');
      }
    });
  }
}
