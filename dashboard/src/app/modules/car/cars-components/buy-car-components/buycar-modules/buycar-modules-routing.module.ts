import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyCarApiComponent } from '../buy-car-api/buy-car-api.component';
import { CarBuypageComponent } from '../car-buypage/car-buypage.component';
import { CarContectPageComponent } from '../car-contect-page/car-contect-page.component';

const routes: Routes = [
  {
    path: '',
    component: BuyCarApiComponent,
  },
  {
    path: ':brand' ,
    component: CarBuypageComponent
  },
  {
    path: 'contact/:location' ,
    component: CarContectPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuycarModulesRoutingModule {}
