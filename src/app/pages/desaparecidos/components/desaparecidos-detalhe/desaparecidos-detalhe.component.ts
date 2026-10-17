import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { DesaparecidosFacade } from '../../desaparecidos.facade';
import { map } from 'rxjs';
import { IPessoas } from '../../models/pessoas.model';
import { DatePipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DesaparecidosDetalheDialogComponent } from './dialog/desaparecidos-detalhe-dialog.component';

const UM_DIA_EM_MS = 1000 * 60 * 60 * 24;

@Component({
  selector: 'app-desaparecidos-detalhe',
  imports: [
    DatePipe,
    NgClass,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  standalone: true,
  templateUrl: './desaparecidos-detalhe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './desaparecidos-detalhe.component.scss',
})
export class DesaparecidosDetalheComponent {
  private dialog = inject(MatDialog);
  private _facade = inject(DesaparecidosFacade);
  private router = inject(Router);

  id!: number;

  /** Pessoa carregada no state, ou null enquanto ainda não há dados. */
  readonly pessoa = toSignal(
    this._facade.detalhePessoa$.pipe(
      map((value: IPessoas) => (Object.keys(value).length > 0 ? value : null))
    ),
    { initialValue: null }
  );

  /** Mensagem amigável quando a busca da pessoa falha (null = sem erro). */
  readonly erro = toSignal(this._facade.erroDetalhe$, { initialValue: null });

  /** Dias (arredondados) desde a data do desaparecimento. */
  readonly dataPercorrida = computed(() => {
    const data = this.pessoa()?.ultimaOcorrencia?.dtDesaparecimento;
    if (!data) {
      return null;
    }
    return Math.round((Date.now() - new Date(data).getTime()) / UM_DIA_EM_MS);
  });

  constructor() {
    this._facade.idDetalhe$
      .pipe(takeUntilDestroyed())
      .subscribe((value: number) => {
        if (!isNaN(Number(value))) {
          this.id = value;
        } else {
          this.router.navigate(['/']);
        }
      });
  }

  tentarNovamente(): void {
    this._facade.tentarCarregarDetalheNovamente();
  }

  openDialog(): void {
    const pessoa = this.pessoa();
    this.dialog.open(DesaparecidosDetalheDialogComponent, {
      data: {
        id: pessoa?.ultimaOcorrencia?.ocoId,
        descricao: pessoa?.nome,
      },
      width: '600px', // Tamanho do diálogo
    });
  }
}
