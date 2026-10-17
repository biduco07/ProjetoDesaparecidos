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
    loadInitialData: jasmine.createSpy('loadInitialData'),
    tentarNovamente: jasmine.createSpy('tentarNovamente'),
    adicionarFormularioState: jasmine.createSpy('adicionarFormularioState'),
    resetPagination: jasmine.createSpy('resetPagination'),
    consultarDesaparecidos: jasmine.createSpy('consultarDesaparecidos'),
    handlePagination: jasmine.createSpy('handlePagination'),
    getIdDetalhes: jasmine.createSpy('getIdDetalhes'),
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
      providers: [
        { provide: DesaparecidosFacade, useValue: facade },
      ],
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
    observables.forEach((obs) => expect(obs.observed).toBeTrue());

    fixture.destroy();

    observables.forEach((obs) => expect(obs.observed).toBeFalse());
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
