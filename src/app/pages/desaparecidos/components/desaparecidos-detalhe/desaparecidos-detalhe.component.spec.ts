import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withXhr } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { DesaparecidosDetalheComponent } from './desaparecidos-detalhe.component';
import { DesaparecidosState } from '../../state/desaparecidos.state';
import {
  DesaparecidosFacade,
  MENSAGEM_ERRO_DETALHE,
} from '../../desaparecidos.facade';
import { IPessoas } from '../../models/pessoas.model';
import { environment } from '../../../../../environments/environment';

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
      expect(elemento().querySelector('mat-spinner')).not.toBeNull();
      expect(elemento().querySelector('[role="alert"]')).toBeNull();

      httpMock.expectOne(urlDetalhe).flush(PESSOA);
    });

    it('mostra a mensagem e o botão "Tentar de novo" quando a API falha', () => {
      responderComErro();

      expect(elemento().querySelector('[role="alert"]')?.textContent).toContain(
        MENSAGEM_ERRO_DETALHE
      );
      expect(botaoTentarDeNovo()).toBeDefined();
      expect(elemento().querySelector('mat-spinner')).toBeNull();
    });

    it('busca a pessoa de novo ao clicar em "Tentar de novo"', () => {
      responderComErro();

      botaoTentarDeNovo()?.click();
      fixture.detectChanges();

      expect(elemento().querySelector('[role="alert"]')).toBeNull();
      expect(elemento().querySelector('mat-spinner')).not.toBeNull();

      httpMock.expectOne(urlDetalhe).flush(PESSOA);
      fixture.detectChanges();

      expect(elemento().querySelector('mat-spinner')).toBeNull();
      expect(elemento().textContent).toContain('MARIA DA SILVA');
    });
  });
});
