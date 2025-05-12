import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  // Edit mode variables
  editMode = false;
  editingUserId: number | null = null;

  constructor(private fb: FormBuilder) {
    this.newUserForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  ngOnInit(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  addUser(): void {
    if (this.newUserForm.invalid) {
      this.showMessage('Please fill all fields correctly.', 'error');
      return;
    }

    if (this.editMode && this.editingUserId !== null) {
      this.users = this.users.map((user) =>
        user.id === this.editingUserId
          ? {
              ...user,
              name: this.newUserForm.value.name,
              email: this.newUserForm.value.email,
              mobile: this.newUserForm.value.mobile,
            }
          : user
      );
      this.showMessage('User updated successfully!', 'success');
    } else {
      const user: User = {
        id: this.users.length + 1,
        name: this.newUserForm.value.name,
        email: this.newUserForm.value.email,
        mobile: this.newUserForm.value.mobile,
      };
      this.users.push(user);
      this.showMessage('User added successfully!', 'success');
    }

    this.saveUsers();
    this.cancelEdit();
  }

  editUser(user: User): void {
    this.editMode = true;
    this.editingUserId = user.id;
    this.newUserForm.setValue({
      name: user.name,
      email: user.email,
      mobile: user.mobile,
    });
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editingUserId = null;
    this.newUserForm.reset();
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
