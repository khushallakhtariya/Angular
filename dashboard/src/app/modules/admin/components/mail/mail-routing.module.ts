import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';
import { DraftComponent } from './draft/draft.component';
import { StarredComponent } from './starred/starred.component';
import { DeletedComponent } from './deleted/deleted.component';

const routes: Routes = [
  {
    path: '',
    component:MailComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      
      {
        path: 'inbox',
        component: InboxComponent
      },
        {
          path:'sent',
          component: SentComponent
        },
        {
          path:'draft',
          component: DraftComponent
        },
        {
          path:'starred',
          component: StarredComponent
        },
        {
          path: 'deleted',
          component: DeletedComponent
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailRoutingModule { }
