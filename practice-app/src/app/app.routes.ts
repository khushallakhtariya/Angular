import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,  // Keep HomeComponent as the default route
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'help-me',
    loadComponent: () =>
      import('./components/help-me/help-me.component').then((m) => m.HelpMeComponent),
  },
  {
    path: 'user-feedback',
    loadComponent: () =>
      import('./components/user-riew/user-riew.component').then(
        (m) => m.UserRiewComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: 'view/:code',
    loadComponent: () =>
      import('./modules/pages/view-car-details/view-car-details.component').then(
        (m) => m.ViewCarDetailsComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/pages/view-car-details/view-car-details.component').then(
            (m) => m.ViewCarDetailsComponent
          ),
      },
    ],
  },
  {
    path: 'view/:code/info',
    loadComponent: () =>
      import('./modules/pages/get-info/get-info.component').then((m) => m.InfoComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./components/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/no-page/no-page.component').then((m) => m.NoPageComponent),
  },
];
