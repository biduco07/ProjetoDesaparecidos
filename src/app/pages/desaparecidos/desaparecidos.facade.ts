import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DesaparecidosService } from '../../core/desaparecidos.service';
import { DesaparecidosState } from './state/desaparecidos.state';
import { IEstatisticas } from './models/estatisticas.model';

@Injectable({ providedIn: 'root' })
export class DesaparecidosFacade {
  localizadosDesaparecidos$!: Observable<IEstatisticas>;

  constructor(
    private _api: DesaparecidosService,
    private _state: DesaparecidosState
  ) {
    // Link Observables
    this.localizadosDesaparecidos$ = this._state.localizadosDesaparecidos$;
  }

  loadInitialData(): void {
    this._api.getEstatisticas().subscribe({
      next: (res) => {
        debugger;
        this._state.localizadosDesaparecidos = res;
        console.log(this._state.localizadosDesaparecidos$);
      },
    });
  }

  resetCurrentAlvo(): void {
    /*
    this._visualizaState.alvoSelecionado = new DadosAlvo();
  */
  }
}
