import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ViewCarDetailsComponent } from "./view-car-details/view-car-details.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'view/:code/details',
    loadComponent: () =>
      import('./view-car-details/view-car-details.component').then(
        (m) => m.ViewCarDetailsComponent
      ),
    children: [
      {
        path: 'view/car/details/:code/:section',
        loadComponent: () =>
          import('./view-car-details/view-car-details.component').then(
            (m) => m.ViewCarDetailsComponent
          ),
      },
    ],
  },
  {
    path: 'view/:code/details/info',
    loadComponent: () =>
      import('./get-info/get-info.component').then((m) => m.InfoComponent),
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },

  {
    path: 'help-me',
    loadComponent: () =>
      import('./help-me/help-me.component').then((m) => m.HelpMeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./no-page/no-page.component').then((m) => m.NoPageComponent),
  },
];
