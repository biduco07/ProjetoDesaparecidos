import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

/** Textos do mat-paginator em português (o padrão do Material é inglês). */
@Injectable()
export class PaginadorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Itens por página:';
  override nextPageLabel = 'Próxima página';
  override previousPageLabel = 'Página anterior';
  override firstPageLabel = 'Primeira página';
  override lastPageLabel = 'Última página';

  override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ): string => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    const inicio = page * pageSize;
    const fim = Math.min(inicio + pageSize, length);
    return `${inicio + 1} – ${fim} de ${length}`;
  };
}
