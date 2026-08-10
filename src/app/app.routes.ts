import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboards/dashboard.component').then((m) => m.DashboardComponent),
        title: 'Dashboard',
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./features/reports/reports.component').then((m) => m.ReportsComponent),
        title: 'Report',
      },
      {
        path: 'alarms',
        loadComponent: () =>
          import('./features/alarms/alarms.component').then((m) => m.AlarmsComponent),
        title: 'Alarms',
      },
      {
        path: 'monitoring',
        loadComponent: () =>
          import('./features/monitoring/monitoring.component').then((m) => m.MonitoringComponent),
        title: 'Monitoring',
      },
      {
        path: 'outage',
        loadComponent: () =>
          import('./features/outage/outage.component').then((m) => m.OutageComponent),
        title: 'Outage',
      },
      {
        path: 'help',
        loadComponent: () =>
          import('./features/help/help.component').then((m) => m.HelpComponent),
        title: 'Help',
      },
    ],
  },
];