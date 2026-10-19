import { LiveAnnouncer } from '@angular/cdk/a11y';
import { isPlatformBrowser } from '@angular/common';
import {
  Injectable,
  InjectionToken,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { toast } from '@spartan-ng/brain/sonner';

/** Parte do `toast` do sonner da spartan que o app usa. */
export type Notificador = Pick<typeof toast, 'success' | 'error'>;

/**
 * Quem mostra os avisos rápidos. Por padrão é o `toast` do sonner da spartan
 * (o `<hlm-toaster>` fica no componente raiz); os testes trocam por um dublê.
 */
export const NOTIFICADOR = new InjectionToken<Notificador>('NOTIFICADOR', {
  providedIn: 'root',
  factory: () => toast,
});

/** O sonner fecha o aviso quando o botão de ação é clicado. */
const FECHAR = { label: 'Fechar', onClick: () => undefined };

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private notificador = inject(NOTIFICADOR);
  private anunciador = inject(LiveAnnouncer);
  private noNavegador = isPlatformBrowser(inject(PLATFORM_ID));

  /** Aviso de sucesso (ex.: informação enviada). */
  showSuccess(message: string): void {
    this.notificador.success(message, { action: FECHAR });
    this.anunciar(message, 'polite');
  }

  /** Aviso de erro (ex.: envio falhou, arquivo recusado). */
  showError(message: string): void {
    this.notificador.error(message, { action: FECHAR });
    this.anunciar(message, 'assertive');
  }

  /**
   * Repete a mensagem para o leitor de tela. A região do sonner nasce já com
   * o texto (no primeiro aviso, e dentro do @defer do toaster), e vários
   * leitores de tela não anunciam região que nasce com conteúdo; o
   * LiveAnnouncer do CDK usa uma região aria-live que já existe, como o
   * MatSnackBar fazia.
   */
  private anunciar(mensagem: string, prioridade: 'polite' | 'assertive'): void {
    if (this.noNavegador) {
      void this.anunciador.announce(mensagem, prioridade);
    }
  }
}
