import { DeferBlockState, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { TemaService } from './core/tema.service';
import { classesDeCorFixa } from '../testing/cores-fixas';

describe('AppComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
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

  describe('tema', () => {
    function botaoDeTema(el: HTMLElement): HTMLButtonElement | null {
      return el.querySelector<HTMLButtonElement>('header button[aria-label^="Usar tema"]');
    }

    afterEach(() => localStorage.clear());

    it('o botão de tema começa oferecendo o claro (escuro é o padrão)', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();

      expect(botaoDeTema(fixture.nativeElement)?.getAttribute('aria-label')).toBe(
        'Usar tema claro'
      );
    });

    it('clicar no botão troca o tema e o rótulo do botão', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const el = fixture.nativeElement as HTMLElement;

      botaoDeTema(el)?.click();
      fixture.detectChanges();

      expect(TestBed.inject(TemaService).modo()).toBe('claro');
      expect(botaoDeTema(el)?.getAttribute('aria-label')).toBe('Usar tema escuro');
    });
  });

  it('carrega o toaster dos avisos num @defer (fora do bundle inicial)', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const blocos = await fixture.getDeferBlocks();
    expect(blocos.length).toBe(1);

    await blocos[0].render(DeferBlockState.Complete);

    expect(el.querySelector('hlm-toaster')).not.toBeNull();
  });

  it('não usa cores fixas do Tailwind (só tokens do tema)', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    expect(classesDeCorFixa(fixture.nativeElement)).toEqual([]);
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
