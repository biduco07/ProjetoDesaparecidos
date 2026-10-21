import { janelaDePaginas, rotuloDoIntervalo } from './janela-de-paginas';

describe('janelaDePaginas', () => {
  it('não mostra nada quando não há páginas', () => {
    expect(janelaDePaginas(0, 0)).toEqual([]);
  });

  it('mostra todas as páginas quando cabem (até 7)', () => {
    expect(janelaDePaginas(0, 1)).toEqual([0]);
    expect(janelaDePaginas(0, 7)).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it('perto do começo: as 5 primeiras, reticências e a última', () => {
    expect(janelaDePaginas(0, 104)).toEqual([0, 1, 2, 3, 4, 'reticencias', 103]);
    expect(janelaDePaginas(3, 104)).toEqual([0, 1, 2, 3, 4, 'reticencias', 103]);
  });

  it('no meio: primeira, a atual com uma vizinha de cada lado e a última', () => {
    expect(janelaDePaginas(4, 104)).toEqual([0, 'reticencias', 3, 4, 5, 'reticencias', 103]);
    expect(janelaDePaginas(50, 104)).toEqual([0, 'reticencias', 49, 50, 51, 'reticencias', 103]);
    expect(janelaDePaginas(99, 104)).toEqual([0, 'reticencias', 98, 99, 100, 'reticencias', 103]);
  });

  it('perto do fim: a primeira, reticências e as 5 últimas', () => {
    expect(janelaDePaginas(100, 104)).toEqual([0, 'reticencias', 99, 100, 101, 102, 103]);
    expect(janelaDePaginas(103, 104)).toEqual([0, 'reticencias', 99, 100, 101, 102, 103]);
  });

  it('com 8 páginas já usa reticências', () => {
    expect(janelaDePaginas(0, 8)).toEqual([0, 1, 2, 3, 4, 'reticencias', 7]);
    expect(janelaDePaginas(7, 8)).toEqual([0, 'reticencias', 3, 4, 5, 6, 7]);
  });
});

describe('rotuloDoIntervalo', () => {
  it('monta o intervalo da página atual', () => {
    expect(rotuloDoIntervalo(0, 12, 30)).toBe('1 – 12 de 30');
    expect(rotuloDoIntervalo(2, 12, 30)).toBe('25 – 30 de 30');
  });

  it('trata lista vazia', () => {
    expect(rotuloDoIntervalo(0, 12, 0)).toBe('0 de 0');
  });
});
