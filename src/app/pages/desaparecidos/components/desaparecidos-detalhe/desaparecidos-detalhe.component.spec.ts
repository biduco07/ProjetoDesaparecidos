import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { DesaparecidosDetalheComponent } from './desaparecidos-detalhe.component';
import { DesaparecidosState } from '../../state/desaparecidos.state';
import { IPessoas } from '../../models/pessoas.model';

describe('DesaparecidosDetalheComponent', () => {
  let component: DesaparecidosDetalheComponent;
  let fixture: ComponentFixture<DesaparecidosDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesaparecidosDetalheComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
    }).compileComponents();
  });

  function criarComponente(): void {
    fixture = TestBed.createComponent(DesaparecidosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  it('should create', () => {
    criarComponente();
    expect(component).toBeTruthy();
  });

  it('exibe os dados da pessoa selecionada no state', () => {
    const state = TestBed.inject(DesaparecidosState);
    state.idDetalhe = 7;
    state.detalhePessoa = {
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

    criarComponente();

    const texto = (fixture.nativeElement as HTMLElement).textContent ?? '';
    expect(component.id).toBe(7);
    expect(texto).toContain('MARIA DA SILVA');
    expect(texto).toContain('Cuiabá - MT');
    expect(texto).toContain('Desaparecido');
  });
});
