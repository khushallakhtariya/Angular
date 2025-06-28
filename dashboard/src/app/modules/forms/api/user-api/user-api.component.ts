import { Component, Inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ProductsService } from '../../../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-api',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-api.component.html',
  styleUrls: ['./user-api.component.css'],
  providers: [ProductsService],
})
export class UserApiComponent {
  users: any[] = [];
  editMode = false;
  message: string = '';
  selectedUserId: number | null = null;
  userFormData = {
    name: '',
    email: '',
    age: '',
  };

  constructor(
    @Inject(ProductsService) private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.productsService.getuser().subscribe((data: any) => {
      this.users = data;
    });
  }

  addOrUpdateUser(form: NgForm) {
    if (this.editMode && this.selectedUserId !== null) {
      this.productsService
        .updateUser(this.selectedUserId, this.userFormData)
        .subscribe(() => {
          const index = this.users.findIndex(
            (u) => u.id === this.selectedUserId
          );
          if (index !== -1) {
            this.users[index] = { ...this.users[index], ...this.userFormData };
          }
          this.message = 'User updated successfully!';
          setTimeout(() => (this.message = ''), 3000);
          this.resetForm(form);
        });
    } else {
      this.productsService
        .saveUser(this.userFormData)
        .subscribe((response: any) => {
          this.users.push(response);
          this.message = 'User added successfully!';
          setTimeout(() => (this.message = ''), 3000);
          this.resetForm(form);
        });
    }
  }

  editUser(user: any) {
    this.editMode = true;
    this.selectedUserId = user.id;
    this.userFormData = {
      name: user.name,
      email: user.email,
      age: user.age,
    };
  }

  deleteUser(id: string | number) {
    this.productsService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter((u) => u.id !== id);
      this.message = 'User deleted successfully!';
      setTimeout(() => (this.message = ''), 3000);
    });
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.editMode = false;
    this.selectedUserId = null;
    this.userFormData = { name: '', email: '', age: '' };
  }
  onClose() {
    this.message = '';
  }
}
