import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';
import { filter, skip } from 'rxjs';
import { TemaService } from './core/tema.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HlmButtonImports, HlmToasterImports, NgIcon],
  providers: [provideIcons({ lucideSun, lucideMoon })],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private router = inject(Router);
  protected readonly tema = inject(TemaService);

  /** O botão diz o que vai fazer: no escuro oferece o claro, e vice-versa. */
  protected readonly rotuloDoTema = computed(() =>
    this.tema.modo() === 'escuro' ? 'Usar tema claro' : 'Usar tema escuro'
  );

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
