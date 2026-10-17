import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Paginacao } from '../shared/paginacao/paginacao';
import { ResultadoPaginado } from '../shared/paginacao/resultado-paginado';
import { IConsulta } from '../pages/desaparecidos/models/consulta.model';
import { IPessoas } from '../pages/desaparecidos/models/pessoas.model';
import { IEstatisticas } from '../pages/desaparecidos/models/estatisticas.model';

const REGISTROS_POR_PAGINA = 12;

@Injectable({
  providedIn: 'root',
})
export class DesaparecidosService {
  private http = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl;

  getArquivos(
    paginacao?: Paginacao,
    filtros?: Partial<IConsulta> | null
  ): Observable<ResultadoPaginado<IPessoas>> {
    let params = new HttpParams()
      .set('faixaIdadeFinal', filtros?.faixaIdadeFinal || 0)
      .set('faixaIdadeInicial', filtros?.faixaIdadeInicial || 0)
      .set('nome', filtros?.nome || '')
      .set('porPagina', paginacao?.size || REGISTROS_POR_PAGINA)
      .set('pagina', paginacao?.page || 0);

    // Filtros opcionais só são enviados quando preenchidos, evitando
    // valores como "undefined" ou "null" na query string.
    if (filtros?.sexo) {
      params = params.set('sexo', filtros.sexo);
    }
    if (filtros?.status) {
      params = params.set('status', filtros.status);
    }

    return this.http.get<ResultadoPaginado<IPessoas>>(
      `${this.apiUrl}/v1/pessoas/aberto/filtro`,
      { params }
    );
  }

  getArquivosDetalhe(id: number): Observable<IPessoas> {
    return this.http.get<IPessoas>(`${this.apiUrl}/v1/pessoas/${id}`);
  }

  getEstatisticas(): Observable<IEstatisticas> {
    return this.http.get<IEstatisticas>(
      `${this.apiUrl}/v1/pessoas/aberto/estatistico`
    );
  }

  postOcorrencia(form: FormData): Observable<unknown> {
    return this.http.post<unknown>(
      `${this.apiUrl}/v1/ocorrencias/informacoes-desaparecido`,
      form
    );
  }
}
