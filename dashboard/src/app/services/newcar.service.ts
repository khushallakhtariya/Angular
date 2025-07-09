import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { newcarApiEndpoints } from '../utilities/api-constants-endpoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewcarService {
  private apiUrl = `${environment.apiBaseUrl}${newcarApiEndpoints.newCars}`;
  constructor(private http: HttpClient) {}

  getNewCars(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getNewCarByModel(model: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?model=${model}`);
  }

  getNewCarByBrand(brand: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?brand=${brand}`);
  }
}
