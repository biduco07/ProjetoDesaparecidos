import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorComponent } from './paginador.component';
import { MudancaDePagina } from '../paginacao';
import { classesDeCorFixa } from '../../../../testing/cores-fixas';

describe('PaginadorComponent', () => {
  let fixture: ComponentFixture<PaginadorComponent>;
  let emitidos: MudancaDePagina[];

  function montar(pagina: number, total: number, tamanho = 12): HTMLElement {
    fixture = TestBed.createComponent(PaginadorComponent);
    fixture.componentRef.setInput('pagina', pagina);
    fixture.componentRef.setInput('tamanho', tamanho);
    fixture.componentRef.setInput('total', total);
    emitidos = [];
    fixture.componentInstance.mudouPagina.subscribe((e) => emitidos.push(e));
    fixture.detectChanges();
    return fixture.nativeElement as HTMLElement;
  }

  /** Botão pelo rótulo; falha se ele não existir (um clique em null passaria calado). */
  function botao(el: HTMLElement, rotulo: string): HTMLButtonElement {
    const encontrado = el.querySelector<HTMLButtonElement>(
      `button[aria-label="${rotulo}"]`
    );
    expect(encontrado, `botão "${rotulo}"`).not.toBeNull();
    return encontrado!;
  }

  /** "Desabilitado" por aria-disabled: o botão continua no Tab e com o foco. */
  function desabilitado(b: HTMLButtonElement): boolean {
    return b.getAttribute('aria-disabled') === 'true' && !b.disabled;
  }

  /** Botões com o número de uma página ("Página 3"), sem anterior/próxima. */
  function botoesDeNumero(el: HTMLElement): HTMLButtonElement[] {
    return Array.from(el.querySelectorAll<HTMLButtonElement>('li button')).filter(
      (b) => /^Página \d+$/.test(b.getAttribute('aria-label') ?? '')
    );
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginadorComponent],
    }).compileComponents();
  });

  it('mostra o intervalo, a navegação rotulada e anuncia a página', () => {
    const el = montar(0, 25);

    expect(el.textContent).toContain('1 – 12 de 25');
    expect(el.querySelector('nav')?.getAttribute('aria-label')).toBe('Paginação');
    const anuncio = el.querySelector('[aria-live="polite"]');
    expect(anuncio?.textContent?.trim()).toBe('Página 1 de 3');
  });

  it('marca só a página atual com aria-current', () => {
    const el = montar(0, 25);

    expect(botao(el, 'Página 1').getAttribute('aria-current')).toBe('page');
    expect(botao(el, 'Página 2').hasAttribute('aria-current')).toBe(false);
    expect(botao(el, 'Página 3').hasAttribute('aria-current')).toBe(false);
  });

  it('marca "Página anterior" na primeira e "Próxima página" na última com aria-disabled (sem disabled)', () => {
    let el = montar(0, 25);
    expect(desabilitado(botao(el, 'Página anterior'))).toBe(true);
    expect(botao(el, 'Próxima página').hasAttribute('aria-disabled')).toBe(false);

    el = montar(2, 25);
    expect(botao(el, 'Página anterior').hasAttribute('aria-disabled')).toBe(false);
    expect(desabilitado(botao(el, 'Próxima página'))).toBe(true);
  });

  it('não emite ao clicar em "Página anterior"/"Próxima página" nas pontas', () => {
    let el = montar(0, 25);
    botao(el, 'Página anterior').click();
    expect(emitidos).toEqual([]);

    el = montar(2, 25);
    botao(el, 'Próxima página').click();
    expect(emitidos).toEqual([]);
  });

  it('o foco continua em "Próxima página" quando ela chega à última página', () => {
    const el = montar(1, 25);
    document.body.appendChild(el);
    const proxima = botao(el, 'Próxima página');
    proxima.focus();

    proxima.click();
    fixture.componentRef.setInput('pagina', emitidos[0].pagina);
    fixture.detectChanges();

    expect(document.activeElement).toBe(proxima);
    expect(desabilitado(proxima)).toBe(true);
    el.remove();
  });

  it('emite a página escolhida (próxima, anterior ou pelo número)', () => {
    const el = montar(1, 25);

    botao(el, 'Próxima página').click();
    botao(el, 'Página anterior').click();
    botao(el, 'Página 3').click();

    expect(emitidos).toEqual([
      { pagina: 2, tamanho: 12 },
      { pagina: 0, tamanho: 12 },
      { pagina: 2, tamanho: 12 },
    ]);
  });

  it('não emite ao clicar na página atual', () => {
    const el = montar(1, 25);

    botao(el, 'Página 2').click();

    expect(emitidos).toEqual([]);
  });

  it('com muitas páginas mostra reticências com texto para o leitor de tela', () => {
    const el = montar(0, 1248);

    expect(el.textContent).toContain('Mais páginas');
    botao(el, 'Página 104');
    expect(botoesDeNumero(el).length).toBe(6);
  });

  it('sem resultados mostra "0 de 0" e nenhum botão ativo', () => {
    const el = montar(0, 0);

    expect(el.textContent).toContain('0 de 0');
    expect(botoesDeNumero(el).length).toBe(0);
    expect(desabilitado(botao(el, 'Página anterior'))).toBe(true);
    expect(desabilitado(botao(el, 'Próxima página'))).toBe(true);
  });

  it('não usa cores fixas do Tailwind', () => {
    expect(classesDeCorFixa(montar(1, 1248))).toEqual([]);
  });
});
