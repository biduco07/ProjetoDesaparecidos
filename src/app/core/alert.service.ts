import { Injectable, InjectionToken, inject } from '@angular/core';
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

  /** Aviso de sucesso (ex.: informação enviada). */
  showSuccess(message: string): void {
    this.notificador.success(message, { action: FECHAR });
  }

  /** Aviso de erro (ex.: envio falhou, arquivo recusado). */
  showError(message: string): void {
    this.notificador.error(message, { action: FECHAR });
  }
}
