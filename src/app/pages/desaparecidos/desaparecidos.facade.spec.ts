import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { of, throwError } from 'rxjs';

import { DesaparecidosFacade } from './desaparecidos.facade';
import { DesaparecidosState } from './state/desaparecidos.state';
import { DesaparecidosService } from '../../core/desaparecidos.service';
import { AlertService } from '../../core/alert.service';
import { IConsulta } from './models/consulta.model';
import { IEstatisticas } from './models/estatisticas.model';
import { IPessoas } from './models/pessoas.model';
import { ResultadoPaginado } from '../../shared/paginacao/resultado-paginado';

describe('DesaparecidosFacade', () => {
  const pagina: ResultadoPaginado<IPessoas> = {
    totalElements: 25,
    totalPages: 3,
    content: [{ id: 1, nome: 'JOÃO' } as IPessoas],
  };
  const estatisticas: IEstatisticas = {
    quantPessoasDesaparecidas: 100,
    quantPessoasEncontradas: 40,
  };

  let facade: DesaparecidosFacade;
  let state: DesaparecidosState;
  let api: jasmine.SpyObj<DesaparecidosService>;
  let alert: jasmine.SpyObj<AlertService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    api = jasmine.createSpyObj<DesaparecidosService>('DesaparecidosService', [
      'getArquivos',
      'getArquivosDetalhe',
      'getEstatisticas',
      'postOcorrencia',
    ]);
    api.getArquivos.and.returnValue(of(pagina));
    api.getEstatisticas.and.returnValue(of(estatisticas));
    alert = jasmine.createSpyObj<AlertService>('AlertService', [
      'showSuccess',
      'showError',
    ]);
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);
    router.navigate.and.resolveTo(true);

    configurar('browser');
  });

  /** Monta a facade como se rodasse no navegador ou no servidor (SSR/build). */
  function configurar(plataforma: 'browser' | 'server'): void {
    TestBed.configureTestingModule({
      providers: [
        DesaparecidosFacade,
        DesaparecidosState,
        { provide: DesaparecidosService, useValue: api },
        { provide: AlertService, useValue: alert },
        { provide: Router, useValue: router },
        { provide: PLATFORM_ID, useValue: plataforma },
      ],
    });

    facade = TestBed.inject(DesaparecidosFacade);
    state = TestBed.inject(DesaparecidosState);
  }

  describe('carregamento inicial', () => {
    it('busca lista e estatísticas e publica no state', () => {
      let listaEmitida: ResultadoPaginado<IPessoas> | undefined;
      let estatisticasEmitidas: IEstatisticas | undefined;
      facade.listaPessoas$.subscribe((v) => (listaEmitida = v));
      facade.localizadosDesaparecidos$.subscribe(
        (v) => (estatisticasEmitidas = v)
      );

      facade.loadInitialData();

      expect(api.getArquivos).toHaveBeenCalledOnceWith(
        { page: 0, size: 12 },
        state.formularioConsulta
      );
      expect(api.getEstatisticas).toHaveBeenCalledTimes(1);
      expect(listaEmitida).toEqual(pagina);
      expect(estatisticasEmitidas).toEqual(estatisticas);
    });

    it('não chama a API na renderização no servidor (pré-renderização do build)', () => {
      // Os dados buscados no build ficariam congelados no HTML estático
      // (e no TransferState); quem busca é o navegador, sempre atualizado.
      TestBed.resetTestingModule();
      configurar('server');

      facade.loadInitialData();

      expect(api.getArquivos).not.toHaveBeenCalled();
      expect(api.getEstatisticas).not.toHaveBeenCalled();
    });

    it('mantém a lista e publica uma mensagem amigável quando a consulta falha', () => {
      const erro = spyOn(console, 'error');
      api.getArquivos.and.returnValue(throwError(() => new Error('offline')));
      const listaAntes = state.listaPessoas;
      let erroEmitido: string | null | undefined;
      facade.erroConsulta$.subscribe((v) => (erroEmitido = v));

      facade.consultarDesaparecidos();

      expect(state.listaPessoas).toBe(listaAntes);
      expect(erroEmitido).toContain('Não foi possível carregar');
      expect(erro).toHaveBeenCalled();
    });

    it('limpa o erro quando uma nova consulta dá certo', () => {
      state.erroConsulta = 'Falhou antes';

      facade.consultarDesaparecidos();

      expect(state.erroConsulta).toBeNull();
      expect(state.listaPessoas).toEqual(pagina);
    });
  });

  describe('tentar de novo', () => {
    beforeEach(() => spyOn(console, 'error'));

    it('refaz a consulta com a página e os filtros atuais', () => {
      const filtros = { nome: 'ANA' } as IConsulta;
      state.formularioConsulta = filtros;
      state.controlePaginacao = { page: 3, size: 12 };
      state.erroConsulta = 'Falhou';
      state.localizadosDesaparecidos = estatisticas;

      facade.tentarNovamente();

      expect(api.getArquivos).toHaveBeenCalledOnceWith(
        { page: 3, size: 12 },
        filtros
      );
      expect(state.erroConsulta).toBeNull();
      expect(state.listaPessoas).toEqual(pagina);
    });

    it('recarrega as estatísticas quando elas também não carregaram', () => {
      api.getEstatisticas.and.returnValue(
        throwError(() => new Error('offline'))
      );
      facade.consultarEstatisticas();
      api.getEstatisticas.and.returnValue(of(estatisticas));

      facade.tentarNovamente();

      expect(api.getEstatisticas).toHaveBeenCalledTimes(2);
      expect(state.localizadosDesaparecidos).toEqual(estatisticas);
    });

    it('não busca de novo as estatísticas que já foram carregadas', () => {
      state.localizadosDesaparecidos = estatisticas;

      facade.tentarNovamente();

      expect(api.getEstatisticas).not.toHaveBeenCalled();
    });
  });

  describe('paginação', () => {
    it('atualiza a página no state mantendo o tamanho e reconsulta', () => {
      facade.handlePagination({ pageIndex: 2, pageSize: 12 } as PageEvent);

      expect(state.controlePaginacao).toEqual({ page: 2, size: 12 });
      expect(api.getArquivos).toHaveBeenCalledOnceWith(
        { page: 2, size: 12 },
        state.formularioConsulta
      );
    });

    it('resetPagination volta para a primeira página', () => {
      state.controlePaginacao = { page: 5, size: 12 };

      facade.resetPagination();

      expect(state.controlePaginacao).toEqual({ page: 0, size: 12 });
    });
  });

  describe('filtro', () => {
    it('consulta com os filtros salvos a partir da primeira página', () => {
      const filtros: IConsulta = {
        nome: 'MARIA',
        faixaIdadeInicial: 18,
        faixaIdadeFinal: 40,
        sexo: 'FEMININO',
        status: 'DESAPARECIDO',
      };
      state.controlePaginacao = { page: 4, size: 12 };

      // Mesmo fluxo disparado pelo botão "Consultar" do container.
      facade.adicionarFormularioState(filtros);
      facade.resetPagination();
      facade.consultarDesaparecidos();

      expect(state.formularioConsulta).toEqual(filtros);
      expect(api.getArquivos).toHaveBeenCalledOnceWith(
        { page: 0, size: 12 },
        filtros
      );
    });

    it('mantém os filtros ao paginar', () => {
      const filtros = { nome: 'JOSÉ' } as IConsulta;
      facade.adicionarFormularioState(filtros);

      facade.handlePagination({ pageIndex: 1, pageSize: 12 } as PageEvent);

      expect(api.getArquivos).toHaveBeenCalledOnceWith(
        { page: 1, size: 12 },
        filtros
      );
    });
  });

  describe('detalhe', () => {
    it('guarda o id, carrega a pessoa e navega para /detalhe', () => {
      const pessoa = { id: 7, nome: 'MARIA' } as IPessoas;
      api.getArquivosDetalhe.and.returnValue(of(pessoa));

      facade.getIdDetalhes(7);

      expect(state.idDetalhe).toBe(7);
      expect(api.getArquivosDetalhe).toHaveBeenCalledOnceWith(7);
      expect(state.detalhePessoa).toEqual(pessoa);
      expect(router.navigate).toHaveBeenCalledOnceWith(['/detalhe']);
    });
  });

  describe('envio de informações', () => {
    it('exibe mensagem de sucesso quando a API aceita o envio', () => {
      api.postOcorrencia.and.returnValue(of({}));

      facade.postOcorrencia(new FormData());

      expect(alert.showSuccess).toHaveBeenCalled();
      expect(alert.showError).not.toHaveBeenCalled();
    });

    it('exibe mensagem de erro quando a API rejeita o envio', () => {
      api.postOcorrencia.and.returnValue(throwError(() => new Error('400')));

      facade.postOcorrencia(new FormData());

      expect(alert.showError).toHaveBeenCalled();
      expect(alert.showSuccess).not.toHaveBeenCalled();
    });
  });
});
