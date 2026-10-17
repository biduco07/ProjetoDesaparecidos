import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { DesaparecidosComponent } from './desaparecidos.component';
import { DesaparecidosFacade } from '../desaparecidos.facade';
import { IEstatisticas } from '../models/estatisticas.model';
import { IPessoas } from '../models/pessoas.model';
import { IConsulta } from '../models/consulta.model';
import { ResultadoPaginado } from '../../../shared/paginacao/resultado-paginado';
import { Paginacao } from '../../../shared/paginacao/paginacao';

function criarFacadeFake() {
  return {
    localizadosDesaparecidos$: new BehaviorSubject<IEstatisticas>({
      quantPessoasDesaparecidas: 10,
      quantPessoasEncontradas: 5,
    }),
    listaPessoas$: new BehaviorSubject<ResultadoPaginado<IPessoas>>({
      content: [],
      totalElements: 0,
    }),
    controlePaginacao$: new BehaviorSubject<Paginacao>({ page: 0, size: 12 }),
    formularioConsulta$: new BehaviorSubject<IConsulta>({} as IConsulta),
    erroConsulta$: new BehaviorSubject<string | null>(null),
    loadInitialData: vi.fn(),
    tentarNovamente: vi.fn(),
    adicionarFormularioState: vi.fn(),
    resetPagination: vi.fn(),
    consultarDesaparecidos: vi.fn(),
    handlePagination: vi.fn(),
    getIdDetalhes: vi.fn(),
  };
}

describe('DesaparecidosComponent', () => {
  let component: DesaparecidosComponent;
  let fixture: ComponentFixture<DesaparecidosComponent>;
  let facade: ReturnType<typeof criarFacadeFake>;

  beforeEach(async () => {
    facade = criarFacadeFake();

    await TestBed.configureTestingModule({
      imports: [DesaparecidosComponent],
      providers: [{ provide: DesaparecidosFacade, useValue: facade }],
    }).compileComponents();

    fixture = TestBed.createComponent(DesaparecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('carrega os dados iniciais ao ser criado', () => {
    expect(facade.loadInitialData).toHaveBeenCalledTimes(1);
  });

  it('cancela as inscrições nos observables da facade ao ser destruído', () => {
    const observables = [
      facade.localizadosDesaparecidos$,
      facade.listaPessoas$,
      facade.controlePaginacao$,
      facade.formularioConsulta$,
      facade.erroConsulta$,
    ];
    observables.forEach((obs) => expect(obs.observed).toBe(true));

    fixture.destroy();

    observables.forEach((obs) => expect(obs.observed).toBe(false));
  });

  describe('lista de pessoas', () => {
    const pessoa = (id: number, nome: string) =>
      ({
        id,
        nome,
        idade: 30,
        sexo: 'FEMININO',
        urlFoto: null,
        ultimaOcorrencia: {
          dtDesaparecimento: new Date('2024-01-10T10:00:00'),
          localDesaparecimentoConcat: 'Cuiabá - MT',
        },
      }) as IPessoas;

    function elemento(): HTMLElement {
      return fixture.nativeElement as HTMLElement;
    }

    beforeEach(() => {
      facade.listaPessoas$.next({
        content: [pessoa(1, 'MARIA'), pessoa(2, 'JOÃO')],
        totalElements: 25,
      });
      fixture.detectChanges();
    });

    it('mostra os totalizadores', () => {
      const texto = elemento().textContent ?? '';
      expect(texto).toContain('Desaparecidos: 10');
      expect(texto).toContain('Localizados: 5');
    });

    it('renderiza um item de lista com botão por pessoa', () => {
      const botoes = elemento().querySelectorAll('li mat-card h3 button');
      expect(Array.from(botoes).map((b) => b.textContent?.trim())).toEqual([
        'MARIA',
        'JOÃO',
      ]);
      expect(elemento().textContent).toContain('10/01/2024 10:00');
      expect(elemento().textContent).toContain('Cuiabá - MT');
    });

    it('abre o detalhe pelo botão do card (teclado e clique)', () => {
      elemento()
        .querySelectorAll<HTMLButtonElement>('li mat-card h3 button')[1]
        .click();

      expect(facade.getIdDetalhes).toHaveBeenCalledWith(2);
    });

    it('anuncia a quantidade de resultados para o leitor de tela', () => {
      expect(
        elemento().querySelector('#resumo-resultados')?.textContent?.trim()
      ).toBe('25 pessoas encontradas.');
    });

    it('mostra uma mensagem quando a consulta não encontra ninguém', () => {
      facade.listaPessoas$.next({ content: [], totalElements: 0 });
      fixture.detectChanges();

      expect(elemento().textContent).toContain(
        'Nenhuma pessoa encontrada com esses filtros.'
      );
      expect(component.resumoResultados()).toBe('Nenhuma pessoa encontrada.');
    });

    it('usa os textos do paginador em português', () => {
      expect(elemento().querySelector('mat-paginator')?.textContent).toContain(
        '1 – 12 de 25'
      );
      expect(
        elemento()
          .querySelector('.mat-mdc-paginator-navigation-next')
          ?.getAttribute('aria-label')
      ).toBe('Próxima página');
    });

    it('repassa a troca de página para a facade', () => {
      component.handlePagination({ pageIndex: 1, pageSize: 12, length: 25 });

      expect(facade.handlePagination).toHaveBeenCalledWith(
        expect.objectContaining({ pageIndex: 1 })
      );
    });
  });

  describe('filtros', () => {
    function form(): HTMLFormElement {
      return (fixture.nativeElement as HTMLElement).querySelector('form')!;
    }

    it('consulta com os filtros ao enviar o formulário (Enter ou "Consultar")', () => {
      component.form.patchValue({ nome: 'MARIA', sexo: 'FEMININO' });

      form().dispatchEvent(new Event('submit'));

      expect(facade.adicionarFormularioState).toHaveBeenCalledWith(
        expect.objectContaining({ nome: 'MARIA', sexo: 'FEMININO' })
      );
      expect(facade.resetPagination).toHaveBeenCalled();
      expect(facade.consultarDesaparecidos).toHaveBeenCalled();
    });

    it('"Limpar" zera os filtros e consulta de novo', () => {
      component.form.patchValue({ nome: 'MARIA' });

      component.resetForm();

      expect(component.form.value.nome).toBeNull();
      expect(facade.consultarDesaparecidos).toHaveBeenCalled();
    });

    it('restaura os filtros salvos no state ao voltar do detalhe', () => {
      facade.formularioConsulta$.next({
        nome: 'JOÃO',
        status: 'LOCALIZADO',
      } as IConsulta);

      expect(component.form.value).toEqual(
        expect.objectContaining({ nome: 'JOÃO', status: 'LOCALIZADO' })
      );
    });

    it('associa cada campo a um rótulo', () => {
      const el = fixture.nativeElement as HTMLElement;
      expect(el.querySelector('label[for="filtro-nome"]')).not.toBeNull();
      expect(el.querySelector('#filtro-nome')).not.toBeNull();
      el.querySelectorAll('mat-radio-group').forEach((grupo) =>
        expect(grupo.getAttribute('aria-labelledby')).toMatch(/^filtro-/)
      );
    });
  });

  describe('quando a API falha', () => {
    const mensagem = 'Não foi possível carregar a lista de pessoas.';

    function elemento(): HTMLElement {
      return fixture.nativeElement as HTMLElement;
    }

    function botaoTentarDeNovo(): HTMLButtonElement | undefined {
      return Array.from(elemento().querySelectorAll('button')).find((b) =>
        b.textContent?.includes('Tentar de novo')
      );
    }

    beforeEach(() => {
      // Primeira carga sem resposta: a facade ainda não tem lista para publicar.
      fixture.destroy();
      facade.listaPessoas$ = new BehaviorSubject<ResultadoPaginado<IPessoas>>(
        {}
      );
      fixture = TestBed.createComponent(DesaparecidosComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('mostra a mensagem e o botão "Tentar de novo" no lugar do spinner', () => {
      expect(elemento().querySelector('mat-spinner')).not.toBeNull();

      facade.erroConsulta$.next(mensagem);
      fixture.detectChanges();

      expect(elemento().querySelector('[role="alert"]')?.textContent).toContain(
        mensagem
      );
      expect(botaoTentarDeNovo()).toBeDefined();
      expect(elemento().querySelector('mat-spinner')).toBeNull();
    });

    it('pede à facade para tentar de novo ao clicar no botão', () => {
      facade.erroConsulta$.next(mensagem);
      fixture.detectChanges();

      botaoTentarDeNovo()?.click();

      expect(facade.tentarNovamente).toHaveBeenCalledTimes(1);
    });

    it('esconde o erro quando a facade o limpa', () => {
      facade.erroConsulta$.next(mensagem);
      fixture.detectChanges();
      facade.erroConsulta$.next(null);
      fixture.detectChanges();

      expect(elemento().querySelector('[role="alert"]')).toBeNull();
      expect(botaoTentarDeNovo()).toBeUndefined();
    });
  });
});
