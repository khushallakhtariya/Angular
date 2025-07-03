import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsApiComponent } from './cars-components/cars-api/cars-api.component';
import { CarLoginComponent } from './cars-components/car-login/car-login.component';
import { ViewCarComponent } from './cars-components/view-car/view-car.component';
import { BookCarComponent } from './cars-components/book-car/book-car.component';
import { ContactCarComponent } from './cars-components/contact-car/contact-car.component';
import { authGuard } from '../../auth.guard';
import { AboutCarComponent } from './cars-components/about-car/about-car.component';
import { NewCarPageComponent } from './cars-components/new-car-page/new-car-page.component';

const routes: Routes = [
  {
    path: '',
    component: CarsApiComponent,
  },
  {
    path: 'login',
    component: CarLoginComponent,
  },
  {
    path: 'view/:id',
    component: ViewCarComponent,
  },
  {
    path: 'contact',
    component: ContactCarComponent,
  },
  {
    path: 'view/:id/contact',
    component: ContactCarComponent,
  },
  {
    path: 'book/:id',
    component: BookCarComponent,
  },
  {
    path: 'book/car',
    component: BookCarComponent,
  },
  {
    path: 'about/book',
    component: BookCarComponent,
  },
  {
    path: 'view/book/:id',
    component: BookCarComponent,
  },
  {
    path: 'all',
    loadChildren: () =>
      import(
        './cars-components/all-car-components/all-car-module/all-car-module-routing.module'
      ).then((m) => m.AllCarModuleRoutingModule),
    canActivate: [authGuard],
  },
  {
    path: 'newcars',
    component: NewCarPageComponent,
  },
  {
    path: 'about',
    component: AboutCarComponent,
    canActivate: [authGuard],
  },
  {
    path: 'buy',
    loadChildren: () =>
      import(
        './cars-components/buy-car-components/buycar-modules/buycar-modules.module'
      ).then((m) => m.BuycarModulesModule),
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
