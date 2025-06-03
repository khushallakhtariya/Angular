import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavDeshComponent } from './ng-forms/nav-desh/nav-desh.component';
import { FormGroupComponent } from './ng-forms/form-group/form-group.component';
import { FormBuilder } from '@angular/forms';
import { Form3Component } from './ng-forms/form-3/form-3.component';
import { Form4Component } from './ng-forms/form-4/form-4.component';
import { ProductApiComponent } from './api/product-api/product-api.component';
import { UserApiComponent } from './api/user-api/user-api.component';
import { AutocompleteComponent } from './components-up/autocomplete/autocomplete.component';
import { ButtonsComponent } from './components-up/buttons/buttons.component';
import { ChipsComponent } from './components-up/chips/chips.component';
import { BottomSheetComponent } from './components-up/bottom-sheet/bottom-sheet.component';
import { pipe } from 'rxjs';
import { PipesComponent } from './components-up/pipes/pipes.component';
import { CPipesComponent } from './components-up/c-pipes/c-pipes.component';
import { ObservableComponent } from './components-up/observable/observable.component';
import { ErrorHComponent } from './components-up/error-h/error-h.component';
import { ToDoListComponent } from './components-up/to-do-list/to-do-list.component';
import { UserInformaitonComponent } from './ng-forms/form-group/user-informaiton/user-informaiton.component';

const routes: Routes = [
  {
    path: '',
    component: NavDeshComponent,
    children: [
      {
        path: 'api-user',
        loadChildren: () =>
          import ('./ng-forms/form-group/form-group.module').then((m)=> m.FormGroupModule)
        
      },
      {
        path: 'reactive-form-2',
        component: Form3Component,
      },
      {
        path: 'reactive-form-3',
        component: Form4Component,
      },
      {
        path: 'Api-Products',
        component: ProductApiComponent,
      },

      {
        path: 'Api-user',
        component: UserApiComponent,
      },
      {
        path: 'autocomplete',
        component: AutocompleteComponent,
      },
      {
        path: 'error',
        component: ErrorHComponent,
      },
      {
        path: 'button',
        component: ButtonsComponent,
      },
      {
        path: 'chips',
        component: ChipsComponent,
      },
      {
        path: 'bottom-sheet',
        component: BottomSheetComponent,
      },
      {
        path: 'pipes',
        component: PipesComponent,
      },
      {
        path: 'custom-pipes',
        component: CPipesComponent,
      },
      {
        path: 'observable',
        component: ObservableComponent,
      },
      {
        path: 'todo',
        component: ToDoListComponent,
      },

      {
        path: '',
        redirectTo: 'api-user',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
