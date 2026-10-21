import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideChevronLeft,
  lucideChevronRight,
  lucideEllipsis,
} from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';

import { MudancaDePagina } from '../paginacao';
import { janelaDePaginas, rotuloDoIntervalo } from '../janela-de-paginas';

/**
 * Paginador da lista. A paginação é feita pela API e guardada no state, por
 * isso o componente só recebe a página atual e avisa qual foi escolhida
 * (a paginação da spartan é só visual e navega por routerLink).
 */
@Component({
  selector: 'app-paginador',
  imports: [HlmButtonImports, NgIcon],
  providers: [
    provideIcons({ lucideChevronLeft, lucideChevronRight, lucideEllipsis }),
  ],
  templateUrl: './paginador.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginadorComponent {
  /** Página atual, a partir de 0. */
  readonly pagina = input.required<number>();
  readonly tamanho = input.required<number>();
  /** Total de itens encontrados pela consulta. */
  readonly total = input.required<number>();

  readonly mudouPagina = output<MudancaDePagina>();

  protected readonly totalDePaginas = computed(() =>
    this.tamanho() > 0 ? Math.ceil(this.total() / this.tamanho()) : 0
  );
  protected readonly janela = computed(() =>
    janelaDePaginas(this.pagina(), this.totalDePaginas())
  );
  protected readonly intervalo = computed(() =>
    rotuloDoIntervalo(this.pagina(), this.tamanho(), this.total())
  );
  protected readonly naPrimeira = computed(() => this.pagina() <= 0);
  protected readonly naUltima = computed(
    () => this.pagina() >= this.totalDePaginas() - 1
  );
  /** Lido pelo leitor de tela quando a página muda. */
  protected readonly anuncio = computed(() =>
    this.totalDePaginas() > 0
      ? `Página ${this.pagina() + 1} de ${this.totalDePaginas()}`
      : ''
  );

  protected ir(pagina: number): void {
    if (
      pagina === this.pagina() ||
      pagina < 0 ||
      pagina >= this.totalDePaginas()
    ) {
      return;
    }
    this.mudouPagina.emit({ pagina, tamanho: this.tamanho() });
  }
}
