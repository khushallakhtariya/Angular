import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost:3000/students';
  
  constructor(private http: HttpClient) {}


  getstudents() { 
    return this.http.get<{ users: any[] }>(this.url);
  }
  savestudents(students: any) {
    return this.http.post(this.url, students);
  }

  deletestudents(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
  updatestudents(id: any, students: any) {
    return this.http.put(`${this.url}/${id}`, students);
  }
}