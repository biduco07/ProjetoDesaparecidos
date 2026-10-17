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
    const navigate = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    fixture.detectChanges();

    (fixture.nativeElement as HTMLElement)
      .querySelector<HTMLImageElement>('img')
      ?.click();

    expect(navigate).toHaveBeenCalledWith(['/']);
  });

  it('usa landmarks e um único h1 para o leitor de tela', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('header')).not.toBeNull();
    expect(el.querySelector('main#conteudo')).not.toBeNull();
    expect(el.querySelectorAll('h1').length).toBe(1);
    expect(el.querySelector('h1')?.textContent?.trim()).toBe('Desaparecidos');
  });

  it('o link "Pular para o conteúdo" leva o foco ao <main>', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    document.body.appendChild(el);

    el.querySelector<HTMLAnchorElement>('a[href="#conteudo"]')?.click();

    expect(document.activeElement).toBe(el.querySelector('main'));
    el.remove();
  });

  it('leva o foco ao <main> quando a rota muda (depois da primeira carga)', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    document.body.appendChild(el);
    const router = TestBed.inject(Router);

    await router.navigateByUrl('/');
    expect(document.activeElement).not.toBe(el.querySelector('main'));

    await router.navigateByUrl('/?pagina=2');
    expect(document.activeElement).toBe(el.querySelector('main'));
    el.remove();
  });
});
