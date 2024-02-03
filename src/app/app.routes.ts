import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@webartestudio/home').then((m) => m.homeRoutes),
  },
];
