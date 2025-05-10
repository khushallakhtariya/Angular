import { Routes } from '@angular/router';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },

  {
    path: 'deshbord',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),

  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
