import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginacao } from '../shared/paginacao/paginacao';

@Injectable({
  providedIn: 'root',
})
export class DesaparecidosService {
  endpointAbitus: string = ' https://abitus-api.geia.vip/';
  constructor(private http: HttpClient) {}

  getArquivos(paginacao?: Paginacao, form?: any): Observable<any> {
    return this.http.get<any>(
      `${this.endpointAbitus}v1/pessoas/aberto/filtro?faixaIdadeFinal=${
        form?.faixaIdadeFinal || 0
      }&faixaIdadeInicial=${form?.faixaIdadeInicial || 0}&nome=${
        form?.nome || ''
      }&porPagina=12&sexo=${form?.sexo}&status=${form?.status}&pagina=${
        paginacao?.page || '0'
      }`
    );
  }

  getArquivosDetalhe(id: number): Observable<any> {
    return this.http.get<any>(`${this.endpointAbitus}v1/pessoas/${id}`);
  }

  getEstatisticas(): Observable<any> {
    return this.http.get<any>(
      this.endpointAbitus + 'v1/pessoas/aberto/estatistico'
    );
  }

  postOcorrencia(form: FormData): Observable<any> {
    return this.http.post<any>(
      this.endpointAbitus + 'v1/ocorrencias/informacoes-desaparecido',
      form
    );
  }
}
