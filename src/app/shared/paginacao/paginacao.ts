export interface Paginacao {
  size: number;
  total?: number;
  pageCount?: number;
  page: number;
}

/** Página escolhida no paginador (índice a partir de 0) e o tamanho da página. */
export interface MudancaDePagina {
  pagina: number;
  tamanho: number;
}
