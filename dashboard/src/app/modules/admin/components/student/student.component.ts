import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from '../../../../services/student.service';

interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
}

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService],
})
export class StudentComponent implements OnInit {
  users: User[] = [];
  newUserForm: FormGroup;
  message = '';
  messageType: 'success' | 'error' | '' = '';

  showDeleteModal = false;
  userToDelete: number | null = null;

  editMode = false;
  editingUserId: number | null = null;

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.newUserForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.studentService.getstudents().subscribe({
      next: (res: any) => {
        this.users = res.users || res; 
      },
      error: () => this.showMessage('Failed to load users.', 'error'),
    });
  }

  addUser(): void {
    if (this.newUserForm.invalid) {
      this.showMessage('Please fill all fields correctly.', 'error');
      return;
    }

    const formData = this.newUserForm.value;

    if (this.editMode && this.editingUserId !== null) {
      this.studentService.updatestudents(this.editingUserId, formData).subscribe({
        next: () => {
          this.showMessage('User updated successfully!', 'success');
          this.getUsers();
          this.cancelEdit();
        },
        error: () => this.showMessage('Failed to update user.', 'error'),
      });
    } else {
      this.studentService.savestudents(formData).subscribe({
        next: () => {
          this.showMessage('User added successfully!', 'success');
          this.getUsers();
          this.cancelEdit();
        },
        error: () => this.showMessage('Failed to add user.', 'error'),
      });
    }
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
      this.studentService.deletestudents(this.userToDelete).subscribe({
        next: () => {
          this.showMessage('User deleted successfully!', 'success');
          this.getUsers();
          this.cancelDelete();
        },
        error: () => this.showMessage('Failed to delete user.', 'error'),
      });
    }
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
