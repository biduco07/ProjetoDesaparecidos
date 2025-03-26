export interface ResultadoPaginado<T> {
  page?: number;
  size?: number;
  total?: number;
  pageCount?: number;
  content?: T[];
}
