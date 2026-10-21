import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { DesaparecidosService } from '../../core/desaparecidos.service';
import { DesaparecidosState } from './state/desaparecidos.state';
import { IEstatisticas } from './models/estatisticas.model';
import { ResultadoPaginado } from '../../shared/paginacao/resultado-paginado';
import { IPessoas } from './models/pessoas.model';
import { MudancaDePagina, Paginacao } from '../../shared/paginacao/paginacao';
import { AlertService } from '../../core/alert.service';
import { IConsulta } from './models/consulta.model';
import { Router } from '@angular/router';

/** Mensagem exibida no lugar da lista quando a API não responde. */
export const MENSAGEM_ERRO_CONSULTA =
  'Não foi possível carregar a lista de pessoas. Verifique sua conexão e tente de novo.';

/** Mensagem exibida na tela de detalhe quando os dados da pessoa não carregam. */
export const MENSAGEM_ERRO_DETALHE =
  'Não foi possível carregar os dados desta pessoa. Verifique sua conexão e tente de novo.';

@Injectable({ providedIn: 'root' })
export class DesaparecidosFacade {
  private _api = inject(DesaparecidosService);
  private _state = inject(DesaparecidosState);
  private _alert = inject(AlertService);
  private _router = inject(Router);
  private _platformId = inject(PLATFORM_ID);
  /** Busca de detalhe em andamento, cancelada se outra pessoa for aberta. */
  private _detalheEmAndamento?: Subscription;

  localizadosDesaparecidos$!: Observable<IEstatisticas>;
  listaPessoas$!: Observable<ResultadoPaginado<IPessoas>>;
  detalhePessoa$!: Observable<IPessoas>;
  controlePaginacao$!: Observable<Paginacao>;
  formularioConsulta$!: Observable<IConsulta>;
  idDetalhe$!: Observable<number>;
  erroConsulta$!: Observable<string | null>;
  erroDetalhe$!: Observable<string | null>;

  constructor() {
    // Link Observables
    this.localizadosDesaparecidos$ = this._state.localizadosDesaparecidos$;
    this.listaPessoas$ = this._state.listaPessoas$;
    this.detalhePessoa$ = this._state.detalhePessoa$;
    this.controlePaginacao$ = this._state.controlePaginacao$;
    this.formularioConsulta$ = this._state.formularioConsulta$;
    this.idDetalhe$ = this._state.idDetalhe$;
    this.erroConsulta$ = this._state.erroConsulta$;
    this.erroDetalhe$ = this._state.erroDetalhe$;
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

  /**
   * Abre a tela de detalhe e busca a pessoa. A tela mostra o carregamento e,
   * se a API falhar, a mensagem com o botão "Tentar de novo".
   */
  abrirDetalhes(id: number): void {
    this._router.navigate(['/detalhe']);
    this.carregarDetalhe(id);
  }

  carregarDetalhe(id: number): void {
    // Cancela uma busca anterior para que uma resposta atrasada não mostre
    // outra pessoa, e limpa a pessoa anterior para a tela não exibi-la
    // enquanto a nova carrega.
    this._detalheEmAndamento?.unsubscribe();
    this._state.erroDetalhe = null;
    this._state.detalhePessoa = {} as IPessoas;

    this._detalheEmAndamento = this._api.getArquivosDetalhe(id).subscribe({
      next: (res) => {
        this._state.detalhePessoa = res;
      },
      error: (error) => {
        console.error('Erro ao consultar detalhes', error);
        this._state.erroDetalhe = MENSAGEM_ERRO_DETALHE;
      },
    });
  }

  /** Repete a busca da pessoa aberta na tela de detalhe. */
  tentarCarregarDetalheNovamente(): void {
    this.carregarDetalhe(this._state.idDetalhe);
  }

  handlePagination(evento: MudancaDePagina): void {
    this._state.controlePaginacao = {
      ...this._state.controlePaginacao,
      page: evento.pagina,
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
