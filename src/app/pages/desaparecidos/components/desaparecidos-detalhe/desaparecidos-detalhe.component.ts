import { Component } from '@angular/core';
import { DesaparecidosFacade } from '../../desaparecidos.facade';
import { Subject, takeUntil } from 'rxjs';
import { IPessoas } from '../../models/pessoas.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
export class DesaparecidosDetalheComponent {
  id!: number;
  pessoa!: IPessoas;
  dataPercorrida!: any;
  private _unsubscribeFlag$: Subject<any> = new Subject<any>();

  constructor(
    private dialog: MatDialog,
    private _facade: DesaparecidosFacade,
    private route: ActivatedRoute
  ) {
    this.id = Number(this.route?.snapshot?.paramMap?.get('id'));

    this._facade.abrirDetalhes(this.id);

    this._facade.detalhePessoa$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: IPessoas) => {
        if (value) {
          this.pessoa = value;
          this.convertToToday(this.pessoa?.ultimaOcorrencia?.dtDesaparecimento);
        }
      });
  }

  convertToToday(date: any): void {
    const parseDataLong = Date.parse(date);
    const dateNow = Date.now();
    this.dataPercorrida = dateNow - parseDataLong;
    this.dataPercorrida = Math.round(
      this.dataPercorrida / (1000 * 60 * 60 * 24)
    );
  }

  openDialog(): void {
    this.dialog.open(DesaparecidosDetalheDialogComponent, {
      width: '600px', // Tamanho do diálogo
    });
  }
}
