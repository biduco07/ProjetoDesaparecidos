import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'ProjetoDesaparecidos' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProjetoDesaparecidos');
  });

  it('renderiza o cabeçalho com o órgão e o título da aplicação', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const texto = compiled.textContent ?? '';
    expect(texto).toContain('Polícia Judiciária Civil Estado de Mato Grosso');
    expect(texto).toContain('Desaparecidos');
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });

  it('volta para a página inicial ao clicar no brasão', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const router = TestBed.inject(Router);
    const navigate = spyOn(router, 'navigate').and.resolveTo(true);
    fixture.detectChanges();

    (fixture.nativeElement as HTMLElement)
      .querySelector<HTMLImageElement>('img')
      ?.click();

    expect(navigate).toHaveBeenCalledWith(['/']);
  });
});
