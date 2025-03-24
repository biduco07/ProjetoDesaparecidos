import { Routes } from '@angular/router';
import { DesaparecidosComponent } from './pages/desaparecidos/desaparecidos.component';
import { DesaparecidosDetalheComponent } from './pages/desaparecidos-detalhe/desaparecidos-detalhe.component';

export const routes: Routes = [
  // Redirect empty path to '/example'
  {
    path: '',
    component: DesaparecidosComponent,
  },
  {
    path: ':id',
    component: DesaparecidosDetalheComponent,
  },
];
