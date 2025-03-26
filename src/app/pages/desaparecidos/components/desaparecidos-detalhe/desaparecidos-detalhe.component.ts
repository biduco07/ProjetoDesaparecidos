import { Component } from '@angular/core';
import { DesaparecidosFacade } from '../../desaparecidos.facade';
import { Subject, takeUntil } from 'rxjs';
import { IPessoas } from '../../models/pessoas.model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desaparecidos-detalhe',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './desaparecidos-detalhe.component.html',
  styleUrl: './desaparecidos-detalhe.component.scss',
})
export class DesaparecidosDetalheComponent {
  id!: number;
  pessoa!: IPessoas;

  private _unsubscribeFlag$: Subject<any> = new Subject<any>();

  constructor(
    private _facade: DesaparecidosFacade,
    private route: ActivatedRoute
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this._facade.abrirDetalhes(this.id);

    this._facade.detalhePessoa$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: IPessoas) => {
        this.pessoa = value;
      });
  }
}
