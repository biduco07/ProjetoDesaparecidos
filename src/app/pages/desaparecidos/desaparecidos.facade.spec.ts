import type { Mocked } from 'vitest';
import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MudancaDePagina } from '../../shared/paginacao/paginacao';
import { Subject, of, throwError } from 'rxjs';

import {
  DesaparecidosFacade,
  MENSAGEM_ERRO_DETALHE,
} from './desaparecidos.facade';
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
  let api: Mocked<
    Pick<
      DesaparecidosService,
      | 'getArquivos'
      | 'getArquivosDetalhe'
      | 'getEstatisticas'
      | 'postOcorrencia'
    >
  >;
  let alert: Mocked<Pick<AlertService, 'showSuccess' | 'showError'>>;
  let router: Mocked<Pick<Router, 'navigate'>>;

  beforeEach(() => {
    api = {
      getArquivos: vi.fn(),
      getArquivosDetalhe: vi.fn(),
      getEstatisticas: vi.fn(),
      postOcorrencia: vi.fn(),
    };
    api.getArquivos.mockReturnValue(of(pagina));
    api.getEstatisticas.mockReturnValue(of(estatisticas));
    alert = { showSuccess: vi.fn(), showError: vi.fn() };
    router = { navigate: vi.fn() };
    router.navigate.mockResolvedValue(true);

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

      expect(api.getArquivos).toHaveBeenCalledExactlyOnceWith(
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
      const erro = vi.spyOn(console, 'error').mockReturnValue(undefined);
      api.getArquivos.mockReturnValue(throwError(() => new Error('offline')));
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
    beforeEach(() => vi.spyOn(console, 'error').mockReturnValue(undefined));

    it('refaz a consulta com a página e os filtros atuais', () => {
      const filtros = { nome: 'ANA' } as IConsulta;
      state.formularioConsulta = filtros;
      state.controlePaginacao = { page: 3, size: 12 };
      state.erroConsulta = 'Falhou';
      state.localizadosDesaparecidos = estatisticas;

      facade.tentarNovamente();

      expect(api.getArquivos).toHaveBeenCalledExactlyOnceWith(
        { page: 3, size: 12 },
        filtros
      );
      expect(state.erroConsulta).toBeNull();
      expect(state.listaPessoas).toEqual(pagina);
    });

    it('recarrega as estatísticas quando elas também não carregaram', () => {
      api.getEstatisticas.mockReturnValue(
        throwError(() => new Error('offline'))
      );
      facade.consultarEstatisticas();
      api.getEstatisticas.mockReturnValue(of(estatisticas));

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
      facade.handlePagination({ pagina: 2, tamanho: 12 } satisfies MudancaDePagina);

      expect(state.controlePaginacao).toEqual({ page: 2, size: 12 });
      expect(api.getArquivos).toHaveBeenCalledExactlyOnceWith(
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
      expect(api.getArquivos).toHaveBeenCalledExactlyOnceWith(
        { page: 0, size: 12 },
        filtros
      );
    });

    it('mantém os filtros ao paginar', () => {
      const filtros = { nome: 'JOSÉ' } as IConsulta;
      facade.adicionarFormularioState(filtros);

      facade.handlePagination({ pagina: 1, tamanho: 12 } satisfies MudancaDePagina);

      expect(api.getArquivos).toHaveBeenCalledExactlyOnceWith(
        { page: 1, size: 12 },
        filtros
      );
    });
  });

  describe('detalhe', () => {
    it('guarda o id, carrega a pessoa e navega para /detalhe', () => {
      const pessoa = { id: 7, nome: 'MARIA' } as IPessoas;
      api.getArquivosDetalhe.mockReturnValue(of(pessoa));

      facade.getIdDetalhes(7);

      expect(state.idDetalhe).toBe(7);
      expect(api.getArquivosDetalhe).toHaveBeenCalledExactlyOnceWith(7);
      expect(state.detalhePessoa).toEqual(pessoa);
      expect(state.erroDetalhe).toBeNull();
      expect(router.navigate).toHaveBeenCalledExactlyOnceWith(['/detalhe']);
    });

    it('abre o detalhe e publica uma mensagem amigável quando a API falha', () => {
      const erro = vi.spyOn(console, 'error').mockReturnValue(undefined);
      api.getArquivosDetalhe.mockReturnValue(
        throwError(() => new Error('offline'))
      );

      facade.getIdDetalhes(7);

      expect(router.navigate).toHaveBeenCalledExactlyOnceWith(['/detalhe']);
      expect(state.erroDetalhe).toBe(MENSAGEM_ERRO_DETALHE);
      expect(state.detalhePessoa).toEqual({});
      expect(erro).toHaveBeenCalled();
    });

    it('tentar de novo busca a mesma pessoa e limpa o erro', () => {
      vi.spyOn(console, 'error').mockReturnValue(undefined);
      const pessoa = { id: 7, nome: 'MARIA' } as IPessoas;
      api.getArquivosDetalhe.mockReturnValueOnce(
        throwError(() => new Error('offline'))
      );
      facade.getIdDetalhes(7);
      api.getArquivosDetalhe.mockReturnValue(of(pessoa));

      facade.tentarCarregarDetalheNovamente();

      expect(api.getArquivosDetalhe).toHaveBeenCalledTimes(2);
      expect(api.getArquivosDetalhe).toHaveBeenLastCalledWith(7);
      expect(state.erroDetalhe).toBeNull();
      expect(state.detalhePessoa).toEqual(pessoa);
    });

    it('não mostra a pessoa anterior enquanto a nova carrega', () => {
      state.detalhePessoa = { id: 1, nome: 'JOÃO' } as IPessoas;
      api.getArquivosDetalhe.mockReturnValue(new Subject<IPessoas>());

      facade.getIdDetalhes(7);

      expect(state.detalhePessoa).toEqual({});
    });

    it('ignora a resposta atrasada de um detalhe aberto antes', () => {
      const primeira = new Subject<IPessoas>();
      const segunda = new Subject<IPessoas>();
      api.getArquivosDetalhe
        .mockReturnValueOnce(primeira)
        .mockReturnValueOnce(segunda);

      facade.getIdDetalhes(1);
      facade.getIdDetalhes(2);
      segunda.next({ id: 2, nome: 'MARIA' } as IPessoas);
      primeira.next({ id: 1, nome: 'JOÃO' } as IPessoas);

      expect(state.detalhePessoa).toEqual({ id: 2, nome: 'MARIA' });
    });
  });

  describe('envio de informações', () => {
    it('exibe mensagem de sucesso quando a API aceita o envio', () => {
      api.postOcorrencia.mockReturnValue(of({}));

      facade.postOcorrencia(new FormData());

      expect(alert.showSuccess).toHaveBeenCalled();
      expect(alert.showError).not.toHaveBeenCalled();
    });

    it('exibe mensagem de erro quando a API rejeita o envio', () => {
      api.postOcorrencia.mockReturnValue(throwError(() => new Error('400')));

      facade.postOcorrencia(new FormData());

      expect(alert.showError).toHaveBeenCalled();
      expect(alert.showSuccess).not.toHaveBeenCalled();
    });
  });
});
