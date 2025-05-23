import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin/components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';

import { Error404Component } from './components/errors/error-404/error-404.component';
import { Error500Component } from './components/errors/error-500/error-500.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HelpsComponent } from './components/helps/helps.component';

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
        path: 'profile',
        loadChildren: () =>
          import('./components/profile/profile-routing.module').then(
            (m) => m.ProfileRoutingModule
          ),
      },
      {
        path: 'settings',
        loadComponent: () => SettingsComponent,
      },  
      {
        path: 'help',
        loadComponent: () => HelpsComponent,
      },
      {
        path: 'widgets',
        loadChildren: ()=>
          import('./components/widgets/widgets-routing.module').then(
            (m) => m.WidgetsRoutingModule
          )
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./components/customer/customer.module').then((m) => m.CustomerModule),
      },

      {
        path: 'chats',
        loadChildren: () =>
          import('./components/chats/chats.module').then((m) => m.ChatsModule),
      },
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
