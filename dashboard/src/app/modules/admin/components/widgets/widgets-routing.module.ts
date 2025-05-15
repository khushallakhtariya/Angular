import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsComponent } from './widgets.component';
import { ListComponent } from './list/list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChartComponent } from './chart/chart.component';
import { MixedComponent } from './mixed/mixed.component';
import { TablesComponent } from './tables/tables.component';
import { FeedsComponent } from './feeds/feeds.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetsComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'statistics',
        component: StatisticsComponent
      },
      {
        path: 'chart',
        component: ChartComponent
      },
      {
        path: 'mixed',
        component: MixedComponent
      },
      {
        path: 'tables',
        component: TablesComponent
      },
      {
        path: 'feeds',
        component: FeedsComponent
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule {}
