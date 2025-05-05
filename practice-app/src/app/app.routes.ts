import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
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
  // { path: 'admin', loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent) },
  {
    path: 'help-me',
    loadComponent: () =>
      import('./help-me/help-me.component').then((m) => m.HelpMeComponent),
  },
  {
    path: 'no-page',
    loadComponent: () =>
      import('./no-page/no-page.component').then((m) => m.NoPageComponent),
  },
  

];

