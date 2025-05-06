import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'car/:code/details',
    loadComponent: () =>
      import('./view-car-details/view-car-details.component').then((m) => m.ViewCarDetailsComponent),
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
    path: 'get-info/:carName',
    loadComponent: () =>
      import('./get-info/get-info.component').then((m) => m.InfoComponent),
  },


  {
    path: '**',
    loadComponent: () =>
      import('./no-page/no-page.component').then((m) => m.NoPageComponent),
  },
  

];

