import { Component, OnDestroy, inject } from '@angular/core';
import { DesaparecidosFacade } from '../../desaparecidos.facade';
import { Subject, takeUntil } from 'rxjs';
import { IPessoas } from '../../models/pessoas.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DesaparecidosDetalheDialogComponent } from './dialog/desaparecidos-detalhe-dialog.component';
@Component({
  selector: 'app-desaparecidos-detalhe',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule],
  standalone: true,
  templateUrl: './desaparecidos-detalhe.component.html',
  styleUrl: './desaparecidos-detalhe.component.scss',
})
export class DesaparecidosDetalheComponent implements OnDestroy {
  private dialog = inject(MatDialog);
  private _facade = inject(DesaparecidosFacade);
  private router = inject(Router);

  id!: number;
  pessoa!: IPessoas;
  dataPercorrida!: number;
  private _unsubscribeFlag$ = new Subject<void>();

  constructor() {
    this._facade.idDetalhe$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: number) => {
        if (!isNaN(Number(value))) {
          this.id = value;
        } else {
          this.router.navigate(['/']);
        }
      });

    this._facade.detalhePessoa$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: IPessoas) => {
        if (Object.keys(value).length > 0) {
          this.pessoa = value;
          this.convertToToday(this.pessoa?.ultimaOcorrencia?.dtDesaparecimento);
        }
      });
  }
  ngOnDestroy(): void {
    this._unsubscribeFlag$.next();
    this._unsubscribeFlag$.complete();
  }

  convertToToday(date: Date | string): void {
    const parseDataLong = new Date(date).getTime();
    const dateNow = Date.now();
    this.dataPercorrida = dateNow - parseDataLong;
    this.dataPercorrida = Math.round(
      this.dataPercorrida / (1000 * 60 * 60 * 24)
    );
  }

  openDialog(): void {
    this.dialog.open(DesaparecidosDetalheDialogComponent, {
      data: {
        id: this.pessoa?.ultimaOcorrencia?.ocoId,
        descricao: this.pessoa?.nome,
      },
      width: '600px', // Tamanho do diálogo
    });
  }
}
