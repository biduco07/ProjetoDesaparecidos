import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { DesaparecidosFacade } from '../../desaparecidos.facade';
import { map } from 'rxjs';
import { IPessoas } from '../../models/pessoas.model';
import { DatePipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowLeft,
  lucideCircleAlert,
  lucideMessageSquareText,
  lucideRefreshCw,
} from '@ng-icons/lucide';
import { HlmAlertImports } from '@spartan-ng/helm/alert';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmDialogService } from '@spartan-ng/helm/dialog';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';
import { DesaparecidosDetalheDialogComponent } from './dialog/desaparecidos-detalhe-dialog.component';

const UM_DIA_EM_MS = 1000 * 60 * 60 * 24;

@Component({
  selector: 'app-desaparecidos-detalhe',
  imports: [
    DatePipe,
    NgClass,
    NgIcon,
    HlmAlertImports,
    HlmButtonImports,
    HlmCardImports,
    HlmSpinnerImports,
  ],
  providers: [
    provideIcons({
      lucideArrowLeft,
      lucideCircleAlert,
      lucideMessageSquareText,
      lucideRefreshCw,
    }),
  ],
  templateUrl: './desaparecidos-detalhe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesaparecidosDetalheComponent {
  private dialog = inject(HlmDialogService);
  private _facade = inject(DesaparecidosFacade);
  private router = inject(Router);
  private title = inject(Title);

  id!: number;

  /** Pessoa carregada no state, ou null enquanto ainda não há dados. */
  readonly pessoa = toSignal(
    this._facade.detalhePessoa$.pipe(
      map((value: IPessoas) => (Object.keys(value).length > 0 ? value : null))
    ),
    { initialValue: null }
  );

  /** Mensagem amigável quando a busca da pessoa falha (null = sem erro). */
  readonly erro = toSignal(this._facade.erroDetalhe$, { initialValue: null });

  /** Dias (arredondados) desde a data do desaparecimento. */
  readonly dataPercorrida = computed(() => {
    const data = this.pessoa()?.ultimaOcorrencia?.dtDesaparecimento;
    if (!data) {
      return null;
    }
    return Math.round((Date.now() - new Date(data).getTime()) / UM_DIA_EM_MS);
  });

  constructor() {
    // O título da aba identifica a pessoa (WCAG 2.4.2); o da rota fica até
    // os dados chegarem.
    effect(() => {
      const nome = this.pessoa()?.nome;
      if (nome) {
        this.title.setTitle(`${nome} | Projeto Desaparecidos`);
      }
    });

    this._facade.idDetalhe$
      .pipe(takeUntilDestroyed())
      .subscribe((value: number) => {
        if (!isNaN(Number(value))) {
          this.id = value;
        } else {
          this.router.navigate(['/']);
        }
      });
  }

  voltar(): void {
    this.router.navigate(['/']);
  }

  tentarNovamente(): void {
    this._facade.tentarCarregarDetalheNovamente();
  }

  openDialog(): void {
    const pessoa = this.pessoa();
    this.dialog.open(DesaparecidosDetalheDialogComponent, {
      context: {
        id: pessoa?.ultimaOcorrencia?.ocoId,
        descricao: pessoa?.nome,
      },
      // Com várias imagens o formulário passa da altura do celular: rola por dentro.
      contentClass: 'sm:max-w-xl max-h-[calc(100dvh-2rem)] overflow-y-auto',
      closeLabel: 'Fechar',
    });
  }
}
