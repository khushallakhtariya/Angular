import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  ChatsModule } from './chats.module';


const routes: Routes = [
  {
    path: '',
    component: ChatsModule,
    children: [
      { path: '', redirectTo: 'private', pathMatch: 'full' },
      {
        path: 'private',
        loadComponent: () =>
          import('./pvt-chat/pvt-chat.component').then(m => m.PvtChatComponent),
      },
      {
        path: 'group',
        loadComponent: () =>
          import('./group-chat/group-chat.component').then(m => m.GroupChatComponent),
      },
      {
        path: 'drawer',
        loadComponent: () =>
          import('./drawer-chat/drawer-chat.component').then(m => m.DrawerChatComponent),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule {}
