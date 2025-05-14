import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavDeshComponent } from './ng-forms/nav-desh/nav-desh.component';

const routes: Routes = [
  {
    path: '',
    component: NavDeshComponent,
    children: [
      {
        path: 'form-group',
        loadComponent: () => import('./ng-forms/form-group/form-group.component').then(m => m.FormGroupComponent)
      },
      {
        path: 'reactive-form',
        loadComponent: () => import('./ng-forms/form-builder/form-builder.component').then(m => m.FormBuilderComponent)
      },
      {
        path: '',
        redirectTo: 'form-group',
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
