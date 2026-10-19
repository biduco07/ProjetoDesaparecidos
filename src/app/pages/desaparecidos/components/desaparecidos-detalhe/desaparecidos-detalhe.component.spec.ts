import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withXhr } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Router, provideRouter } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HlmDialogService } from '@spartan-ng/helm/dialog';

import { DesaparecidosDetalheComponent } from './desaparecidos-detalhe.component';
import { DesaparecidosState } from '../../state/desaparecidos.state';
import {
  DesaparecidosFacade,
  MENSAGEM_ERRO_DETALHE,
} from '../../desaparecidos.facade';
import { IPessoas } from '../../models/pessoas.model';
import { environment } from '../../../../../environments/environment';
import { classesDeCorFixa } from '../../../../../testing/cores-fixas';

const PESSOA = {
  id: 7,
  nome: 'MARIA DA SILVA',
  idade: 30,
  sexo: 'FEMININO',
  urlFoto: null,
  vivo: true,
  ultimaOcorrencia: {
    dtDesaparecimento: new Date('2024-01-10T10:00:00'),
    localDesaparecimentoConcat: 'Cuiabá - MT',
    ocoId: 99,
  },
} as IPessoas;

describe('DesaparecidosDetalheComponent', () => {
  let component: DesaparecidosDetalheComponent;
  let fixture: ComponentFixture<DesaparecidosDetalheComponent>;
  let state: DesaparecidosState;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesaparecidosDetalheComponent],
      providers: [
        provideHttpClient(withXhr()),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
    }).compileComponents();

    state = TestBed.inject(DesaparecidosState);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  function criarComponente(): void {
    fixture = TestBed.createComponent(DesaparecidosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function elemento(): HTMLElement {
    return fixture.nativeElement as HTMLElement;
  }

  function botaoTentarDeNovo(): HTMLButtonElement | undefined {
    return Array.from(elemento().querySelectorAll('button')).find((b) =>
      b.textContent?.includes('Tentar de novo')
    );
  }

  it('should create', () => {
    criarComponente();
    expect(component).toBeTruthy();
  });

  it('exibe os dados da pessoa selecionada no state', () => {
    state.idDetalhe = 7;
    state.detalhePessoa = PESSOA;

    criarComponente();

    const texto = elemento().textContent ?? '';
    expect(component.id).toBe(7);
    expect(texto).toContain('MARIA DA SILVA');
    expect(texto).toContain('Cuiabá - MT');
    expect(texto).toContain('Desaparecido');
  });

  it('usa o nome da pessoa no título da aba e no título da página', () => {
    state.idDetalhe = 7;
    state.detalhePessoa = PESSOA;

    criarComponente();

    expect(TestBed.inject(Title).getTitle()).toBe(
      'MARIA DA SILVA | Projeto Desaparecidos'
    );
    expect(elemento().querySelector('h2')?.textContent).toContain(
      'MARIA DA SILVA'
    );
  });

  it('calcula há quantos dias a pessoa está desaparecida', () => {
    vi.useFakeTimers({ now: new Date('2024-01-20T10:00:00'), toFake: ['Date'] });
    state.idDetalhe = 7;
    state.detalhePessoa = PESSOA;

    criarComponente();

    expect(component.dataPercorrida()).toBe(10);
    expect(elemento().textContent).toContain('Desaparecido Há 10 Dias.');
    vi.useRealTimers();
  });

  it('mostra os dados da localização quando a pessoa foi encontrada', () => {
    state.idDetalhe = 7;
    state.detalhePessoa = {
      ...PESSOA,
      ultimaOcorrencia: {
        ...PESSOA.ultimaOcorrencia,
        dataLocalizacao: new Date('2024-02-01T00:00:00'),
        encontradoVivo: true,
      },
    } as IPessoas;

    criarComponente();

    const texto = elemento().textContent ?? '';
    expect(texto).toContain('Localizado');
    expect(texto).toContain('01/02/2024');
    expect(texto).toContain('Encontrado Vivo? Sim');
    expect(texto).not.toContain('Encontrou Essa Pessoa?');
  });

  it('volta para a lista pelo botão "Voltar para a lista"', () => {
    state.idDetalhe = 7;
    state.detalhePessoa = PESSOA;
    criarComponente();
    const navigate = vi
      .spyOn(TestBed.inject(Router), 'navigate')
      .mockResolvedValue(true);

    Array.from(elemento().querySelectorAll('button'))
      .find((b) => b.textContent?.includes('Voltar para a lista'))
      ?.click();

    expect(navigate).toHaveBeenCalledWith(['/']);
  });

  it('volta para a lista quando não há pessoa escolhida (página recarregada)', () => {
    const navigate = vi
      .spyOn(TestBed.inject(Router), 'navigate')
      .mockResolvedValue(true);

    criarComponente();

    expect(navigate).toHaveBeenCalledWith(['/']);
  });

  it('abre o formulário com a ocorrência e o nome da pessoa', () => {
    state.idDetalhe = 7;
    state.detalhePessoa = PESSOA;
    criarComponente();
    const dialog = TestBed.inject(HlmDialogService);
    const open = vi.spyOn(dialog, 'open').mockReturnValue(undefined as never);

    Array.from(elemento().querySelectorAll('button'))
      .find((b) => b.textContent?.includes('Encontrou Essa Pessoa?'))
      ?.click();

    expect(open).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        context: { id: 99, descricao: 'MARIA DA SILVA' },
      })
    );
  });

  it('não usa cores fixas do Tailwind (desaparecido e localizado)', () => {
    state.idDetalhe = 7;
    state.detalhePessoa = PESSOA;
    criarComponente();
    expect(classesDeCorFixa(elemento())).toEqual([]);

    state.detalhePessoa = {
      ...PESSOA,
      ultimaOcorrencia: {
        ...PESSOA.ultimaOcorrencia,
        dataLocalizacao: new Date('2024-02-01T00:00:00'),
        encontradoVivo: true,
      },
    } as IPessoas;
    fixture.detectChanges();
    expect(elemento().textContent).toContain('Localizado');
    expect(classesDeCorFixa(elemento())).toEqual([]);
  });

  describe('carregamento a partir da API', () => {
    const urlDetalhe = `${environment.apiUrl}/v1/pessoas/7`;

    function responderComErro(): void {
      httpMock
        .expectOne(urlDetalhe)
        .flush('falhou', { status: 500, statusText: 'Server Error' });
      fixture.detectChanges();
    }

    beforeEach(() => {
      // A facade registra a falha no console; o teste só olha a tela.
      vi.spyOn(console, 'error').mockReturnValue(undefined);
      state.idDetalhe = 7;
      TestBed.inject(DesaparecidosFacade).carregarDetalhe(7);
      criarComponente();
    });

    it('mostra um indicador de carregamento enquanto a pessoa não chega', () => {
      expect(elemento().querySelector('hlm-spinner')).not.toBeNull();
      expect(elemento().querySelector('[role="alert"]')).toBeNull();

      httpMock.expectOne(urlDetalhe).flush(PESSOA);
    });

    it('mostra a mensagem e o botão "Tentar de novo" quando a API falha', () => {
      responderComErro();

      expect(elemento().querySelector('[role="alert"]')?.textContent).toContain(
        MENSAGEM_ERRO_DETALHE
      );
      expect(botaoTentarDeNovo()).toBeDefined();
      expect(elemento().querySelector('hlm-spinner')).toBeNull();
      expect(classesDeCorFixa(elemento())).toEqual([]);
    });

    it('busca a pessoa de novo ao clicar em "Tentar de novo"', () => {
      responderComErro();

      botaoTentarDeNovo()?.click();
      fixture.detectChanges();

      expect(elemento().querySelector('[role="alert"]')).toBeNull();
      expect(elemento().querySelector('hlm-spinner')).not.toBeNull();

      httpMock.expectOne(urlDetalhe).flush(PESSOA);
      fixture.detectChanges();

      expect(elemento().querySelector('hlm-spinner')).toBeNull();
      expect(elemento().textContent).toContain('MARIA DA SILVA');
    });
  });
});
