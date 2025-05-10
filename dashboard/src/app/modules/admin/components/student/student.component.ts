import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  users: User[] = [];
  newUserForm: FormGroup;
  message = '';
  messageType: 'success' | 'error' | '' = '';

  showDeleteModal = false;
  userToDelete: number | null = null;

  constructor(private fb: FormBuilder) {
    this.newUserForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // 10-digit number validation
    });
  }

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  addUser(): void {
    if (this.newUserForm.valid) {
      const user: User = {
        id: this.users.length + 1,
        name: this.newUserForm.value.name,
        email: this.newUserForm.value.email,
        mobile: this.newUserForm.value.mobile,
      };
      this.users.push(user);
      this.saveUsers();
      this.newUserForm.reset();
      this.showMessage('User added successfully!', 'success');
    } else {
      this.showMessage('Please fill all fields correctly.', 'error');
    }
  }

  confirmDeleteUser(id: number): void {
    this.userToDelete = id;
    this.showDeleteModal = true;
  }

  cancelDelete(): void {
    this.userToDelete = null;
    this.showDeleteModal = false;
  }

  proceedDelete(): void {
    if (this.userToDelete !== null) {
      this.users = this.users.filter((user) => user.id !== this.userToDelete);
      this.users = this.users.map((user, index) => ({
        ...user,
        id: index + 1,
      }));
      this.saveUsers();
      this.showMessage('User deleted successfully!', 'success');
    }
    this.cancelDelete();
  }

  private saveUsers(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private showMessage(msg: string, type: 'success' | 'error'): void {
    this.message = msg;
    this.messageType = type;

    setTimeout(() => {
      this.message = '';
      this.messageType = '';
    }, 3000);
  }
}
