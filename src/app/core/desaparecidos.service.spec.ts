import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

import { DesaparecidosService } from './desaparecidos.service';
import { environment } from '../../environments/environment';
import { IConsulta } from '../pages/desaparecidos/models/consulta.model';
import { IPessoas } from '../pages/desaparecidos/models/pessoas.model';
import { IEstatisticas } from '../pages/desaparecidos/models/estatisticas.model';
import { ResultadoPaginado } from '../shared/paginacao/resultado-paginado';

describe('DesaparecidosService', () => {
  const urlFiltro = `${environment.apiUrl}/v1/pessoas/aberto/filtro`;

  let service: DesaparecidosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DesaparecidosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  describe('getArquivos', () => {
    it('usa a URL do environment e parâmetros padrão quando não há filtros', () => {
      service.getArquivos().subscribe();

      const req = httpMock.expectOne((r) => r.url === urlFiltro);
      expect(req.request.method).toBe('GET');
      expect(req.request.params.get('pagina')).toBe('0');
      expect(req.request.params.get('porPagina')).toBe('12');
      expect(req.request.params.get('faixaIdadeInicial')).toBe('0');
      expect(req.request.params.get('faixaIdadeFinal')).toBe('0');
      expect(req.request.params.get('nome')).toBe('');
      expect(req.request.params.has('sexo')).toBeFalse();
      expect(req.request.params.has('status')).toBeFalse();
      req.flush({});
    });

    it('envia paginação e filtros preenchidos como parâmetros', () => {
      const filtros: IConsulta = {
        nome: 'MARIA DA SILVA',
        faixaIdadeInicial: 18,
        faixaIdadeFinal: 30,
        sexo: 'FEMININO',
        status: 'DESAPARECIDO',
      };

      service.getArquivos({ page: 3, size: 12 }, filtros).subscribe();

      const req = httpMock.expectOne((r) => r.url === urlFiltro);
      const params = req.request.params;
      expect(params.get('pagina')).toBe('3');
      expect(params.get('porPagina')).toBe('12');
      expect(params.get('nome')).toBe('MARIA DA SILVA');
      expect(params.get('faixaIdadeInicial')).toBe('18');
      expect(params.get('faixaIdadeFinal')).toBe('30');
      expect(params.get('sexo')).toBe('FEMININO');
      expect(params.get('status')).toBe('DESAPARECIDO');
      req.flush({});
    });

    it('não envia "null" nem "undefined" quando o formulário foi limpo', () => {
      const formularioLimpo = {
        nome: null,
        faixaIdadeInicial: null,
        faixaIdadeFinal: null,
        sexo: null,
        status: null,
      } as unknown as IConsulta;

      service.getArquivos({ page: 0, size: 12 }, formularioLimpo).subscribe();

      const req = httpMock.expectOne((r) => r.url === urlFiltro);
      const query = req.request.params.toString();
      expect(query).not.toContain('null');
      expect(query).not.toContain('undefined');
      expect(req.request.params.get('nome')).toBe('');
      expect(req.request.params.get('faixaIdadeInicial')).toBe('0');
      req.flush({});
    });

    it('repassa a resposta paginada tipada', () => {
      const resposta: ResultadoPaginado<IPessoas> = {
        totalElements: 1,
        content: [{ id: 1, nome: 'JOÃO' } as IPessoas],
      };
      let recebido: ResultadoPaginado<IPessoas> | undefined;

      service.getArquivos().subscribe((r) => (recebido = r));
      httpMock.expectOne((r) => r.url === urlFiltro).flush(resposta);

      expect(recebido).toEqual(resposta);
    });
  });

  it('getArquivosDetalhe busca a pessoa pelo id', () => {
    let recebido: IPessoas | undefined;
    service.getArquivosDetalhe(42).subscribe((r) => (recebido = r));

    const req = httpMock.expectOne(`${environment.apiUrl}/v1/pessoas/42`);
    expect(req.request.method).toBe('GET');
    req.flush({ id: 42, nome: 'MARIA' });

    expect(recebido?.id).toBe(42);
  });

  it('getEstatisticas busca os totalizadores', () => {
    const estatisticas: IEstatisticas = {
      quantPessoasDesaparecidas: 10,
      quantPessoasEncontradas: 5,
    };
    let recebido: IEstatisticas | undefined;
    service.getEstatisticas().subscribe((r) => (recebido = r));

    const req = httpMock.expectOne(
      `${environment.apiUrl}/v1/pessoas/aberto/estatistico`
    );
    expect(req.request.method).toBe('GET');
    req.flush(estatisticas);

    expect(recebido).toEqual(estatisticas);
  });

  it('postOcorrencia envia o FormData para a API', () => {
    const form = new FormData();
    form.append('informacao', 'Vista no centro');

    service.postOcorrencia(form).subscribe();

    const req = httpMock.expectOne(
      `${environment.apiUrl}/v1/ocorrencias/informacoes-desaparecido`
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(form);
    req.flush({});
  });
});
