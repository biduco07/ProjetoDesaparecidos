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

  function botao(el: HTMLElement, rotulo: string): HTMLButtonElement | null {
    return el.querySelector<HTMLButtonElement>(`button[aria-label="${rotulo}"]`);
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

    expect(botao(el, 'Página 1')?.getAttribute('aria-current')).toBe('page');
    expect(botao(el, 'Página 2')?.hasAttribute('aria-current')).toBe(false);
    expect(botao(el, 'Página 3')?.hasAttribute('aria-current')).toBe(false);
  });

  it('desabilita "Página anterior" na primeira e "Próxima página" na última', () => {
    let el = montar(0, 25);
    expect(botao(el, 'Página anterior')?.disabled).toBe(true);
    expect(botao(el, 'Próxima página')?.disabled).toBe(false);

    el = montar(2, 25);
    expect(botao(el, 'Página anterior')?.disabled).toBe(false);
    expect(botao(el, 'Próxima página')?.disabled).toBe(true);
  });

  it('emite a página escolhida (próxima, anterior ou pelo número)', () => {
    const el = montar(1, 25);

    botao(el, 'Próxima página')?.click();
    botao(el, 'Página anterior')?.click();
    botao(el, 'Página 3')?.click();

    expect(emitidos).toEqual([
      { pagina: 2, tamanho: 12 },
      { pagina: 0, tamanho: 12 },
      { pagina: 2, tamanho: 12 },
    ]);
  });

  it('não emite ao clicar na página atual', () => {
    const el = montar(1, 25);

    botao(el, 'Página 2')?.click();

    expect(emitidos).toEqual([]);
  });

  it('com muitas páginas mostra reticências com texto para o leitor de tela', () => {
    const el = montar(0, 1248);

    expect(el.textContent).toContain('Mais páginas');
    expect(botao(el, 'Página 104')).not.toBeNull();
    expect(botoesDeNumero(el).length).toBe(6);
  });

  it('sem resultados mostra "0 de 0" e nenhum botão ativo', () => {
    const el = montar(0, 0);

    expect(el.textContent).toContain('0 de 0');
    expect(botoesDeNumero(el).length).toBe(0);
    expect(botao(el, 'Página anterior')?.disabled).toBe(true);
    expect(botao(el, 'Próxima página')?.disabled).toBe(true);
  });

  it('não usa cores fixas do Tailwind', () => {
    expect(classesDeCorFixa(montar(1, 1248))).toEqual([]);
  });
});
