// products.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { userApiEndpoints } from '../utilities/api-constants-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private userUrl = `${environment.apiBaseUrl}${userApiEndpoints.user}`;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<{ products: any[] }>('https://dummyjson.com/products');
  }

  getuser() { 
    return this.http.get<{ users: any[] }>(this.userUrl);
  }
  saveUser(user: any) {
    return this.http.post(this.userUrl, user);
  }

  deleteUser(id:any){
    return this.http.delete(`${this.userUrl}/${id}`);
  }
  updateUser(id: any, user: any) {
    return this.http.put(`${this.userUrl}/${id}`, user);
  }
}
