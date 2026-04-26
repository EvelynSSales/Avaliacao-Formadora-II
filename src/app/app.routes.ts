import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mudar-cor',
    loadComponent: () => import('./mudar-cor/mudar-cor.page').then( m => m.MudarCorPage)
  },
];
