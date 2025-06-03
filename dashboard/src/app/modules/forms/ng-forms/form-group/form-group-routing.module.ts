import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGroupComponent } from './form-group.component';
import { UserInformaitonComponent } from './user-informaiton/user-informaiton.component';

const routes: Routes = [
  {
    path: '',
    component: FormGroupComponent,
  },
  {
    path: 'user-details/:id',
    component: UserInformaitonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormGroupRoutingModule {}
