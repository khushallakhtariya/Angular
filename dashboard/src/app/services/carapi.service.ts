import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { carApiEndpoints } from '../utilities/api-constants-endpoints';

@Injectable({
  providedIn: 'root',
})
export class CarapiService {
  private apiUrl = `${environment.apiBaseUrl}${carApiEndpoints.cars}`;

  constructor(private http: HttpClient) {}

  getCars(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getCarById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
}
