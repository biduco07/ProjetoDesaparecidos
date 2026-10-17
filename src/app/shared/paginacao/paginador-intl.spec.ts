import { PaginadorIntl } from './paginador-intl';

describe('PaginadorIntl', () => {
  const intl = new PaginadorIntl();

  it('traduz os rótulos dos botões', () => {
    expect(intl.nextPageLabel).toBe('Próxima página');
    expect(intl.previousPageLabel).toBe('Página anterior');
    expect(intl.itemsPerPageLabel).toBe('Itens por página:');
  });

  it('monta o intervalo da página atual', () => {
    expect(intl.getRangeLabel(0, 12, 30)).toBe('1 – 12 de 30');
    expect(intl.getRangeLabel(2, 12, 30)).toBe('25 – 30 de 30');
  });

  it('trata lista vazia', () => {
    expect(intl.getRangeLabel(0, 12, 0)).toBe('0 de 0');
  });
});
