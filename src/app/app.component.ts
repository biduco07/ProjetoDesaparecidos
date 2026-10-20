import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, skip } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private router = inject(Router);

  title = 'ProjetoDesaparecidos';

  private readonly conteudo =
    viewChild.required<ElementRef<HTMLElement>>('conteudo');

  constructor() {
    // Em uma SPA o foco fica no elemento clicado (que some da tela) quando a
    // rota muda. Levar o foco para o <main> faz o leitor de tela anunciar a
    // nova página e o Tab recomeçar do conteúdo. A primeira navegação é a
    // carga da página, que já começa do topo.
    this.router.events
      .pipe(
        filter((evento) => evento instanceof NavigationEnd),
        skip(1),
        takeUntilDestroyed()
      )
      .subscribe(() => this.focarConteudo());
  }

  enviaInicio() {
    this.router.navigate(['/']);
  }

  /** O link "Pular para o conteúdo" move o foco sem mudar a URL da rota. */
  pularParaConteudo(evento: Event): void {
    evento.preventDefault();
    this.focarConteudo();
  }

  private focarConteudo(): void {
    this.conteudo().nativeElement.focus();
  }
}
