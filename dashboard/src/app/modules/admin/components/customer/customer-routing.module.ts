import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerModule } from './customer.module';

const routes: Routes = [
  {
    path:'',
    component: CustomerModule,
    children:[
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path:'list',
        loadComponent: () => import('./list/list.component').then(m => m.ListComponent)
      },
      {
        path:'edit',
        loadComponent: ()=> import('./edit/edit.component').then(m => m.EditComponent)
        
      },
      {
        path: 'create',
        loadComponent: ()=> import('./create/create.component').then(m => m.CreateComponent)
      },
      {
        path: 'details',
        loadComponent: ()=> import('./details/details.component').then(m => m.DetailsComponent)
      },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
