import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-group',
  standalone: true, 
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent {
  userArray: any[] = [];

  userForm: FormGroup = new FormGroup({
    id: new FormControl('0'),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
  });

  constructor(private http: HttpClient) {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (res) => {
        console.log('Users fetched successfully:', res);
        this.userArray = res as any[];
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        alert('Error fetching users');
      }
    });
  }

  OnsaveUser() {
    if (this.userForm.valid) {
      const obj = this.userForm.value;

      if (obj.id === '0' || obj.id === 0) {
        this.http.post('https://jsonplaceholder.typicode.com/users', obj).subscribe({
          next: (res) => {
            console.log('User saved successfully:', res);
            alert('User saved!');
            this.resetForm();
            this.getAllUsers();
          },
          error: (err) => {
            console.error('Error saving user:', err);
            alert('Error saving user');
          }
        });
      } else {
        this.http.put(`https://jsonplaceholder.typicode.com/users/${obj.id}`, obj).subscribe({
          next: (res) => {
            console.log('User updated successfully:', res);
            alert('User updated!');
            this.resetForm();
            this.getAllUsers();
          },
          error: (err) => {
            console.error('Error updating user:', err);
            alert('Error updating user');
          }
        });
      }
    } else {
      alert('Form is invalid. Please fill in all required fields.');
    }
  }

  onEdit(id: number): void {
    this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe({
      next: (res: any) => {
        console.log('User fetched for edit:', res);
        this.userForm.patchValue({
          id: res.id,
          name: res.name,
          username: res.username,
          email: res.email,
        });
      },
      error: (err) => {
        console.error('Error fetching user for edit:', err);
        alert('Error fetching user details');
      }
    });
  }

  resetForm() {
    this.userForm.reset({
      id: '0',
      name: '',
      username: '',
      email: ''
    });
    this.userForm.markAsPristine();
    this.userForm.markAsUntouched();
  }
}
