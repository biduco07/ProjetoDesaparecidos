import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DesaparecidosFacade } from '../desaparecidos.facade';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IEstatisticas } from '../models/estatisticas.model';
import { ResultadoPaginado } from '../../../shared/paginacao/resultado-paginado';
import { IPessoas } from '../models/pessoas.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Paginacao } from '../../../shared/paginacao/paginacao';
import { IConsulta } from '../models/consulta.model';
@Component({
  selector: 'app-desaparecidos',
  templateUrl: './desaparecidos.component.html',
  styleUrl: './desaparecidos.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
})
export class DesaparecidosComponent {
  form!: FormGroup;

  localizadosDesaparecidos!: IEstatisticas;
  listaPessoas!: ResultadoPaginado<IPessoas>;
  paginacao!: Paginacao;
  formularioConsulta!: IConsulta;

  private _unsubscribeFlag$: Subject<any> = new Subject<any>();

  constructor(private _facade: DesaparecidosFacade, private _fb: FormBuilder) {
    this.criarForm();
    this._facade.loadInitialData();

    this._facade.localizadosDesaparecidos$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: IEstatisticas) => {
        this.localizadosDesaparecidos = value;
      });

    this._facade.listaPessoas$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: ResultadoPaginado<IPessoas>) => {
        if (value?.content) {
          this.listaPessoas = value;
        }
      });

    this._facade.controlePaginacao$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: Paginacao) => {
        this.paginacao = value;
      });

    this._facade.formularioConsulta$
      .pipe(takeUntil(this._unsubscribeFlag$))
      .subscribe((value: IConsulta) => {
        if (value) {
          this.formularioConsulta = value;
          this.criarForm();
        }
      });
  }

  criarForm(): void {
    this.form = this._fb.group({
      nome: [this.formularioConsulta?.nome || ''],
      faixaIdadeInicial: [this.formularioConsulta?.faixaIdadeInicial || ''],
      faixaIdadeFinal: [this.formularioConsulta?.faixaIdadeFinal || ''],
      sexo: [this.formularioConsulta?.sexo || ''],
      status: [this.formularioConsulta?.status || ''],
    });
  }

  consultarDesaparecidos(): void {
    this._facade.adicionarFormularioState(this.form.value);
    this._facade.resetPagination();
    this._facade.consultarDesaparecidos();
  }

  abrirDetalhes(id: number): void {
    this._facade.getIdDetalhes(id);
  }

  handlePagination(event: PageEvent): void {
    this._facade.handlePagination(event);
  }
  resetForm() {
    this.form.reset();
    this.consultarDesaparecidos();
  }
}
