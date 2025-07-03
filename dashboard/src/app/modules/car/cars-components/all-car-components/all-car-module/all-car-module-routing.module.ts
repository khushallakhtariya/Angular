import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareCarComponent } from '../share-car/share-car.component';
import { ViewCarComponent } from '../../view-car/view-car.component';
import { BookCarComponent } from '../../book-car/book-car.component';
import { AllCarsComponent } from '../all-cars/all-cars.component';

const routes: Routes = [
  {
    path: '',
    component: AllCarsComponent,
  },
  {
    path: 'Share/:id',
    component: ShareCarComponent,
  },
  {
    path: 'view/:id',
    component: ViewCarComponent,
  },
  {
    path: 'book/:id',
    component: BookCarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCarModuleRoutingModule {}
