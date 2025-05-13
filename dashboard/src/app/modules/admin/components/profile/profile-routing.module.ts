import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { OverviewComponent } from './overview/overview.component';
import { ProjectsComponent } from './projects/projects.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { DocumentsComponent } from './documents/documents.component';
import { ConnectionsComponent } from './connections/connections.component';


const routes: Routes = [
  {
    path: '',
    loadComponent: ()=> ProfileComponent,
    children: [
      {
        path: 'overview',
        loadComponent: () => OverviewComponent
      },
      {
        path:'projects',
        loadComponent: ()=> ProjectsComponent
      },
      {
        path:'campaigns',
        loadComponent: ()=> CampaignsComponent
      },
      {
        path:'documents',
        loadComponent: ()=> DocumentsComponent
      },
      {
        path:'connections',
        loadComponent: ()=> ConnectionsComponent
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
