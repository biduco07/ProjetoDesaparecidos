import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEstatisticas } from '../models/estatisticas.model';
import { Paginacao } from '../../../shared/paginacao/paginacao';
import { ResultadoPaginado } from '../../../shared/paginacao/resultado-paginado';
import { IPessoas } from '../models/pessoas.model';
import { IConsulta } from '../models/consulta.model';

@Injectable({ providedIn: 'root' })
export class DesaparecidosState {
  private _localizadosDesaparecidos$!: BehaviorSubject<IEstatisticas>;
  private _listaPessoas$!: BehaviorSubject<ResultadoPaginado<IPessoas>>;
  private _controlePaginacao$!: BehaviorSubject<Paginacao>;
  private _detalhePessoa$!: BehaviorSubject<IPessoas>;
  private _formularioConsulta$!: BehaviorSubject<IConsulta>;
  private _idDetalhe$!: BehaviorSubject<number>;

  constructor() {
    this._localizadosDesaparecidos$ = new BehaviorSubject<IEstatisticas>(
      {} as IEstatisticas
    );
    this._listaPessoas$ = new BehaviorSubject<ResultadoPaginado<IPessoas>>(
      {} as ResultadoPaginado<IPessoas>
    );

    this._controlePaginacao$ = new BehaviorSubject<Paginacao>({
      page: 0,
      size: 12,
    });
    this._detalhePessoa$ = new BehaviorSubject<IPessoas>({} as IPessoas);
    this._formularioConsulta$ = new BehaviorSubject<IConsulta>({} as IConsulta);
    this._idDetalhe$ = new BehaviorSubject<number>({} as number);
  }
  // Visualizar localizadosDesaparecidos
  get localizadosDesaparecidos$(): Observable<IEstatisticas> {
    return this._localizadosDesaparecidos$.asObservable();
  }
  get localizadosDesaparecidos(): IEstatisticas {
    return this._localizadosDesaparecidos$.value;
  }
  set localizadosDesaparecidos(value: IEstatisticas) {
    this._localizadosDesaparecidos$.next(value);
  }

  // Visualizar controlePaginacao
  get listaPessoas$(): Observable<ResultadoPaginado<IPessoas>> {
    return this._listaPessoas$.asObservable();
  }
  get listaPessoas(): ResultadoPaginado<IPessoas> {
    return this._listaPessoas$.value;
  }
  set listaPessoas(value: ResultadoPaginado<IPessoas>) {
    this._listaPessoas$.next(value);
  }

  // Visualizar localizadosDesaparecidos
  get controlePaginacao$(): Observable<Paginacao> {
    return this._controlePaginacao$.asObservable();
  }
  get controlePaginacao(): Paginacao {
    return this._controlePaginacao$.value;
  }
  set controlePaginacao(value: Paginacao) {
    this._controlePaginacao$.next(value);
  }

  // Visualizar localizadosDesaparecidos
  get detalhePessoa$(): Observable<IPessoas> {
    return this._detalhePessoa$.asObservable();
  }
  get detalhePessoa(): IPessoas {
    return this._detalhePessoa$.value;
  }
  set detalhePessoa(value: IPessoas) {
    this._detalhePessoa$.next(value);
  }

  // Visualizar localizadosDesaparecidos
  get formularioConsulta$(): Observable<IConsulta> {
    return this._formularioConsulta$.asObservable();
  }
  get formularioConsulta(): IConsulta {
    return this._formularioConsulta$.value;
  }
  set formularioConsulta(value: IConsulta) {
    this._formularioConsulta$.next(value);
  }

  // Visualizar localizadosDesaparecidos
  get idDetalhe$(): Observable<number> {
    return this._idDetalhe$.asObservable();
  }
  get idDetalhe(): number {
    return this._idDetalhe$.value;
  }
  set idDetalhe(value: number) {
    this._idDetalhe$.next(value);
  }
}
