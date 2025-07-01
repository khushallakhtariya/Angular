import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  if (!token) {
    snackBar.open('You must be logged in to access this page.', 'Close', {
      duration: 3000, 
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-warning'] 
    });
    router.navigate(['/cars/login']);
    return false;
  }

  return true;
};
