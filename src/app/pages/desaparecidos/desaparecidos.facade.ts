import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DesaparecidosService } from '../../core/desaparecidos.service';
import { DesaparecidosState } from './state/desaparecidos.state';
import { IEstatisticas } from './models/estatisticas.model';
import { ResultadoPaginado } from '../../shared/paginacao/resultado-paginado';
import { IPessoas } from './models/pessoas.model';
import { PageEvent } from '@angular/material/paginator';
import { Paginacao } from '../../shared/paginacao/paginacao';
import { AlertService } from '../../core/alert.service';
import { IConsulta } from './models/consulta.model';

@Injectable({ providedIn: 'root' })
export class DesaparecidosFacade {
  localizadosDesaparecidos$!: Observable<IEstatisticas>;
  listaPessoas$!: Observable<ResultadoPaginado<IPessoas>>;
  detalhePessoa$!: Observable<IPessoas>;
  controlePaginacao$!: Observable<Paginacao>;
  formularioConsulta$!: Observable<IConsulta>;

  constructor(
    private _api: DesaparecidosService,
    private _state: DesaparecidosState,
    private _alert: AlertService
  ) {
    // Link Observables
    this.localizadosDesaparecidos$ = this._state.localizadosDesaparecidos$;
    this.listaPessoas$ = this._state.listaPessoas$;
    this.detalhePessoa$ = this._state.detalhePessoa$;
    this.controlePaginacao$ = this._state.controlePaginacao$;
    this.formularioConsulta$ = this._state.formularioConsulta$;
  }

  loadInitialData(): void {
    this.consultarDesaparecidos();
    this.consultarEstatisticas();
  }

  consultarEstatisticas() {
    this._api.getEstatisticas().subscribe({
      next: (res) => {
        this._state.localizadosDesaparecidos = res;
      },
      error: (error) => {
        console.error(
          'Erro ao buscar quantidade localizado e desaparecidos',
          error
        );
      },
    });
  }

  consultarDesaparecidos(): void {
    this._api
      .getArquivos(
        this._state.controlePaginacao,
        this._state.formularioConsulta
      )
      .subscribe({
        next: (res) => {
          this._state.listaPessoas = res;
        },
        error: (error) => {
          console.error('Erro ao consultar desaparecidos', error);
        },
      });
  }
  abrirDetalhes(id: number): void {
    this._api.getArquivosDetalhe(id).subscribe({
      next: (res) => {
        console.log(res);
        this._state.detalhePessoa = res;
      },
      error: (error) => {
        console.error('Erro ao consultar detalhes', error);
      },
    });
  }

  handlePagination(event: PageEvent): void {
    this._state.controlePaginacao = {
      ...this._state.controlePaginacao,
      page: event.pageIndex,
    };
    this.consultarDesaparecidos();
  }

  postOcorrencia(form: FormData): void {
    this._api.postOcorrencia(form).subscribe({
      next: (res) => {
        this._alert.showSuccess('Informações Adicionada com Sucesso.');
      },
      error: (error) => {
        this._alert.showError('Erro ao Adicionar Informações.');
      },
    });
  }

  adicionarFormularioState(form: IConsulta): void {
    this._state.formularioConsulta = form;
  }

  resetPagination(): void {
    this._state.controlePaginacao = { page: 0, size: 12 };
  }
}
