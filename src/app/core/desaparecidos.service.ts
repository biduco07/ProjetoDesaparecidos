import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginacao } from '../shared/paginacao/paginacao';

@Injectable({
  providedIn: 'root',
})
export class DesaparecidosService {
  endpointAbitus: string = ' https://abitus-api.pjc.mt.gov.br/';
  constructor(private http: HttpClient) {}

  getArquivos(paginacao?: Paginacao, form?: any): Observable<any> {
    return this.http.get<any>(
      `${this.endpointAbitus}v1/pessoas/aberto/filtro?faixaIdadeFinal=${
        form?.faixaIdadeFinal
      }&faixaIdadeInicial=${form?.faixaIdadeInicial}&nome=${
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

  /*
  postAssinarStart(assinatura: any): Observable<any> {
    return this.http.post<any>(
      ${env.apiAssinaturaDigital}/assinar/start,
      assinatura
    );
  }

  postAssinarFinish(assinatura: any): Observable<any> {
    return this.http.post<any>(
      ${env.apiAssinaturaDigital}/assinar/finish,
      assinatura
    );
  }
    */
}
