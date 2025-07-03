import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { studentsApiEndpoints } from '../utilities/api-constants-endpoints';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private url = `${environment.apiBaseUrl}${studentsApiEndpoints.students}`;

  constructor(private http: HttpClient) {}

  getstudents(): Observable<any> {
    return this.http.get<{ users: any[] }>(this.url);
  }
  savestudents(students: any) {
    return this.http.post(this.url, students);
  }

  deletestudents(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  updatestudents(id: any, students: any) {
    return this.http.put(`${this.url}/${id}`, students);
  }
}
