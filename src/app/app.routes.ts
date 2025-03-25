import { Routes } from '@angular/router';
export const routes: Routes = [
  // Redirect empty path to '/example'
  {
    path: '',
    loadComponent: () =>
      import('./pages/desaparecidos/desaparecidos.component').then(
        (m) => m.DesaparecidosComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import(
        './pages/desaparecidos-detalhe/desaparecidos-detalhe.component'
      ).then((m) => m.DesaparecidosDetalheComponent),
  },
];
