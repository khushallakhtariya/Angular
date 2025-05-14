import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavDeshComponent } from './ng-forms/nav-desh/nav-desh.component';

const routes: Routes = [
  {
    path: '',
    component: NavDeshComponent,
    children: [
      {
        path: 'reactive-form-1',
        loadComponent: () => import('./ng-forms/form-group/form-group.component').then(m => m.FormGroupComponent)
      },
      {
        path: 'reactive-form-2',
        loadComponent: () => import('./ng-forms/form-builder/form-builder.component').then(m => m.FormBuilderComponent)
      },
      {
        path: 'reactive-form-3',
        loadComponent: () => import('./ng-forms/form-3/form-3.component').then(m => m.Form3Component)
      },
      {
        path: 'reactive-form-4',
        loadComponent: () => import('./ng-forms/form-4/form-4.component').then(m => m.Form4Component)
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
