import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    DashboardComponent
  ]
})
export class AdminModule { }
