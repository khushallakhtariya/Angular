import { Routes } from '@angular/router';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';


export const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./auth/modules/modules.module').then((m) => m.ModulesModule),
  },

  {
    path: 'deshbord',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),

  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/forms/forms.module').then((m) => m.FormsModule),
  },


  {
    path: '**',
    component: NotFoundComponent,
  },
];
