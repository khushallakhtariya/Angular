import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavDeshComponent } from './ng-forms/nav-desh/nav-desh.component';
import { FormGroupComponent } from './ng-forms/form-group/form-group.component';
import { FormBuilder } from '@angular/forms';
import { Form3Component } from './ng-forms/form-3/form-3.component';
import { Form4Component } from './ng-forms/form-4/form-4.component';
import { ProductApiComponent } from './api/product-api/product-api.component';
import { UserApiComponent } from './api/user-api/user-api.component';

const routes: Routes = [
  {
    path: '',
    component: NavDeshComponent,
    children: [
      {
        path: 'reactive-form-1',
        component: FormGroupComponent
      },
      {
        path: 'reactive-form-2',
        component: FormBuilder
      },
      {
        path: 'reactive-form-3',
        component: Form3Component
      },
      {
        path: 'reactive-form-4',
        component: Form4Component
      },
      {
        path:'Api-Products' ,
        component: ProductApiComponent
      },

      {
       path: 'Api-user',
       component: UserApiComponent
      },
      {
        path: '',
        redirectTo: 'reactive-form-1',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
