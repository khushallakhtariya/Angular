import { Injectable } from '@angular/core';
import { buycarApiEndpoints } from '../utilities/api-constants-endpoints';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuycarService {
  private apiUrl = `${environment.apiBaseUrl}${buycarApiEndpoints.buyCars}`;
  constructor(private http: HttpClient) {}

  getCarsBuy(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
