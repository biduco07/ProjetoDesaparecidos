import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEstatisticas } from '../models/estatisticas.model';
import { Paginacao } from '../../../shared/paginacao/paginacao';

@Injectable({ providedIn: 'root' })
export class DesaparecidosState {
  private _localizadosDesaparecidos$!: BehaviorSubject<IEstatisticas>;
  private _controlePaginacao$!: BehaviorSubject<Paginacao>;

  constructor() {
    this._localizadosDesaparecidos$ = new BehaviorSubject<IEstatisticas>(
      {} as IEstatisticas
    );
  }
  // Visualizar localizadosDesaparecidos
  get localizadosDesaparecidos$(): Observable<IEstatisticas> {
    return this._localizadosDesaparecidos$.asObservable();
  }

  set localizadosDesaparecidos(value: IEstatisticas) {
    this._localizadosDesaparecidos$.next(value);
  }
}
