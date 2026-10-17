import { DesaparecidosState } from './desaparecidos.state';
import { Paginacao } from '../../../shared/paginacao/paginacao';

describe('DesaparecidosState', () => {
  let state: DesaparecidosState;

  beforeEach(() => {
    state = new DesaparecidosState();
  });

  it('começa na primeira página com 12 registros por página', () => {
    expect(state.controlePaginacao).toEqual({ page: 0, size: 12 });
  });

  it('emite o novo valor para quem está inscrito ao alterar a paginação', () => {
    const emitidos: Paginacao[] = [];
    state.controlePaginacao$.subscribe((v) => emitidos.push(v));

    state.controlePaginacao = { page: 1, size: 12 };

    expect(emitidos).toEqual([
      { page: 0, size: 12 },
      { page: 1, size: 12 },
    ]);
  });
});
