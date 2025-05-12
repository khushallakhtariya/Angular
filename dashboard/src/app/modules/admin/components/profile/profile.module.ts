import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { OverviewComponent } from './overview/overview.component';


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
   
  ]
})
export class ProfileModule { }
