import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsApiComponent } from './cars-components/cars-api/cars-api.component';
import { CarLoginComponent } from './cars-components/car-login/car-login.component';
import { ViewCarComponent } from './cars-components/view-car/view-car.component';
import { BookCarComponent } from './cars-components/book-car/book-car.component';
import { ContactCarComponent } from './cars-components/contact-car/contact-car.component';
import { authGuard } from '../../auth.guard';
import { AboutCarComponent } from './cars-components/about-car/about-car.component';
import { AllCarsComponent } from './cars-components/all-car-components/all-cars/all-cars.component';
import { ShareCarComponent } from './cars-components/all-car-components/share-car/share-car.component';

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
    path: 'view/:id/contact',
    component: ContactCarComponent,
  },
  {
    path: 'book/:id',
    component: BookCarComponent,
  },
  {
    path: 'all',
    component: AllCarsComponent,
  },
  {
    path: 'all/Share/:id',
    component: ShareCarComponent,
  },
  {
    path: 'all/view/:id',
    component: ViewCarComponent,
  },
  {
    path: 'all/book/:id',
    component: BookCarComponent,
  },
  {
    path: 'about',
    component: AboutCarComponent,
    canActivate: [authGuard],
  },
  {
    path: 'contact',
    component: ContactCarComponent,
  },
  {
    path: 'book/car',
    component: BookCarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
