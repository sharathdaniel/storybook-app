import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout').then((m) => m.MainLayout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/demo/components/components').then((m) => m.Components),
        pathMatch: 'full',
      },
    ],
  },
];
