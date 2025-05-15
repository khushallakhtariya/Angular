import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets.component';


@NgModule({
  imports: [
    CommonModule,
    WidgetsRoutingModule, 
    WidgetsComponent
  ]
})
export class WidgetsModule {}