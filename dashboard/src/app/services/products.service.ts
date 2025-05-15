import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<{ products: any[] }>(this.url);
  }
}
// This service is responsible for fetching product data from the API.