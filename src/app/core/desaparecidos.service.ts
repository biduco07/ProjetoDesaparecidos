import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesaparecidosService {
  constructor(private http: HttpClient) {}
  /*
  getArquivos(assinaturaId: string): Observable<any> {
    return this.http.get<any>(
     '${env.apiAssinaturaDigital}/arquivos?idRequisicao=${assinaturaId}'
    );
  }

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
