import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin/components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Error404Component } from './components/errors/error-404/error-404.component';
import { Error500Component } from './components/errors/error-500/error-500.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => HomeComponent,
      },
      {
        path: 'users',
        loadComponent: () => StudentComponent,
      },
      {
        path: 'builder',
        loadComponent: () => LayoutComponent,
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./components/profile/profile-routing.module').then(
            (m) => m.ProfileRoutingModule
          ),
      },
      {
        path: 'chats',
        loadChildren: () =>
          import('./components/chats/chats.module').then(m => m.ChatsModule)
      },
      { path: '', redirectTo: 'chats', pathMatch: 'full' },
      { path: '**', redirectTo: 'chats' },
      {
        path: 'error-404',
        loadComponent: () => Error404Component,
      },
      {
        path: 'error-500',
        loadComponent: () => Error500Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
