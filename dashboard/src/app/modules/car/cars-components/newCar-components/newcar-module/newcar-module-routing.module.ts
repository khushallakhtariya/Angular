import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCarPageComponent } from '../new-car-page/new-car-page.component';
import { ContectNewCarComponent } from '../contect-new-car/contect-new-car.component';
import { DetailsNewCarComponent } from '../details-new-car/details-new-car.component';

const routes: Routes = [
  {
    path: '',
    component: NewCarPageComponent,
  },
  {
    path: ':model/contect',
    component: ContectNewCarComponent,
  },
  {
    path: ':brand/details',
    component: DetailsNewCarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcarModuleRoutingModule {}
