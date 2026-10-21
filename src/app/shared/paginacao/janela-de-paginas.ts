/** Um número de página (índice a partir de 0) ou um salto marcado por "…". */
export type ItemDaJanela = number | 'reticencias';

/** Posições do paginador quando há páginas demais para mostrar todas. */
const POSICOES = 7;

function intervalo(inicio: number, fim: number): number[] {
  return Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i);
}

/**
 * Páginas que o paginador mostra: a primeira e a última sempre, a atual com
 * uma vizinha de cada lado e reticências onde houver salto. Com mais de 7
 * páginas são sempre 7 posições, para os botões não mudarem de lugar.
 * Índices a partir de 0, como no state.
 */
export function janelaDePaginas(
  atual: number,
  totalDePaginas: number
): ItemDaJanela[] {
  if (totalDePaginas <= POSICOES) {
    return intervalo(0, totalDePaginas - 1);
  }
  const ultima = totalDePaginas - 1;
  // Até a 4ª página (índice 3) não há salto entre a primeira e a vizinha.
  if (atual <= 3) {
    return [...intervalo(0, 4), 'reticencias', ultima];
  }
  if (atual >= ultima - 3) {
    return [0, 'reticencias', ...intervalo(ultima - 4, ultima)];
  }
  return [0, 'reticencias', atual - 1, atual, atual + 1, 'reticencias', ultima];
}

/** "1 – 12 de 25": itens mostrados na página e o total encontrado. */
export function rotuloDoIntervalo(
  pagina: number,
  tamanho: number,
  total: number
): string {
  if (total === 0 || tamanho === 0) {
    return `0 de ${total}`;
  }
  const inicio = pagina * tamanho;
  const fim = Math.min(inicio + tamanho, total);
  return `${inicio + 1} – ${fim} de ${total}`;
}
