import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    title: 'Pessoas desaparecidas em Mato Grosso | Projeto Desaparecidos',
    loadComponent: () =>
      import('./pages/desaparecidos/containers/desaparecidos.component').then(
        (m) => m.DesaparecidosComponent
      ),
  },
  {
    path: 'detalhe',
    title: 'Detalhes da pessoa | Projeto Desaparecidos',
    loadComponent: () =>
      import(
        './pages/desaparecidos/components/desaparecidos-detalhe/desaparecidos-detalhe.component'
      ).then((m) => m.DesaparecidosDetalheComponent),
  },
  // Endereços desconhecidos voltam para a listagem em vez de quebrar o router.
  { path: '**', redirectTo: '' },
];
