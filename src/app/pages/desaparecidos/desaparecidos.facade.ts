import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
import { Router } from '@angular/router';

/** Mensagem exibida no lugar da lista quando a API não responde. */
export const MENSAGEM_ERRO_CONSULTA =
  'Não foi possível carregar a lista de pessoas. Verifique sua conexão e tente de novo.';

@Injectable({ providedIn: 'root' })
export class DesaparecidosFacade {
  localizadosDesaparecidos$!: Observable<IEstatisticas>;
  listaPessoas$!: Observable<ResultadoPaginado<IPessoas>>;
  detalhePessoa$!: Observable<IPessoas>;
  controlePaginacao$!: Observable<Paginacao>;
  formularioConsulta$!: Observable<IConsulta>;
  idDetalhe$!: Observable<number>;
  erroConsulta$!: Observable<string | null>;

  constructor(
    private _api: DesaparecidosService,
    private _state: DesaparecidosState,
    private _alert: AlertService,
    private _router: Router,
    @Inject(PLATFORM_ID) private _platformId: object
  ) {
    // Link Observables
    this.localizadosDesaparecidos$ = this._state.localizadosDesaparecidos$;
    this.listaPessoas$ = this._state.listaPessoas$;
    this.detalhePessoa$ = this._state.detalhePessoa$;
    this.controlePaginacao$ = this._state.controlePaginacao$;
    this.formularioConsulta$ = this._state.formularioConsulta$;
    this.idDetalhe$ = this._state.idDetalhe$;
    this.erroConsulta$ = this._state.erroConsulta$;
  }

  loadInitialData(): void {
    // Na renderização no servidor (pré-renderização do build) não buscamos
    // dados: eles ficariam congelados no HTML estático e no TransferState.
    // O navegador busca dados atualizados assim que a página carrega.
    if (!isPlatformBrowser(this._platformId)) {
      return;
    }
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
    this._state.erroConsulta = null;
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
          this._state.erroConsulta = MENSAGEM_ERRO_CONSULTA;
        },
      });
  }

  /**
   * Repete a consulta que falhou (mesma página e filtros) e, se os
   * totalizadores também não tinham carregado, busca-os de novo.
   */
  tentarNovamente(): void {
    this.consultarDesaparecidos();
    if (this._state.localizadosDesaparecidos?.quantPessoasDesaparecidas == null) {
      this.consultarEstatisticas();
    }
  }
  abrirDetalhes(id: number): void {
    this._api.getArquivosDetalhe(id).subscribe({
      next: (res) => {
        this._state.detalhePessoa = res;
        this._router.navigate(['/detalhe']);
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
      next: () => {
        this._alert.showSuccess('Informações Adicionada com Sucesso.');
      },
      error: () => {
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

  getIdDetalhes(id: number): void {
    this._state.idDetalhe = id;
    this.abrirDetalhes(id);
  }
}
