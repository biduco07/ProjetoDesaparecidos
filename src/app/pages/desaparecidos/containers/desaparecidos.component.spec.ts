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
    loadInitialData: jasmine.createSpy('loadInitialData'),
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
    ];
    observables.forEach((obs) => expect(obs.observed).toBeTrue());

    fixture.destroy();

    observables.forEach((obs) => expect(obs.observed).toBeFalse());
  });
});
