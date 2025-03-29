import { Routes } from '@angular/router';
export const routes: Routes = [
  // Redirect empty path to '/example'
  {
    path: '',
    loadComponent: () =>
      import('./pages/desaparecidos/containers/desaparecidos.component').then(
        (m) => m.DesaparecidosComponent
      ),
  },
  {
    path: 'detalhe',
    loadComponent: () =>
      import(
        './pages/desaparecidos/components/desaparecidos-detalhe/desaparecidos-detalhe.component'
      ).then((m) => m.DesaparecidosDetalheComponent),
  },
];
