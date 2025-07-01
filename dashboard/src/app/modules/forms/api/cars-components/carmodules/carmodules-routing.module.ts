import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsApiComponent } from '../cars-api/cars-api.component';
import { AllCarsComponent } from '../all-cars/all-cars.component';
import { AboutCarComponent } from '../about-car/about-car.component';
import { ContactCarComponent } from '../contact-car/contact-car.component';
import { BookCarComponent } from '../book-car/book-car.component';
import { ViewCarComponent } from '../view-car/view-car.component';
import { CarLoginComponent } from '../car-login/car-login.component';
import { authGuard } from '../../../../../auth.guard';

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
export class CarmodulesRoutingModule {}
