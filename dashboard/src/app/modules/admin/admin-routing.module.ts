import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin/components/dashboard/dashboard.component'; 
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',  
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => HomeComponent
      },
      {
        path:'users',
        loadComponent: () => StudentComponent
      },
      {
        path:'builder',
        loadComponent: ()=> LayoutComponent
      },
        {
          path: 'profile',
          loadChildren: () =>
            import('./components/profile/profile-routing.module').then((m) => m.ProfileRoutingModule)
        },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
