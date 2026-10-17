export interface IPessoas {
  id: number;
  idade: number;
  nome: string;
  sexo: string;
  urlFoto: string | null;
  vivo: boolean;
  ultimaOcorrencia: IUltimaOcorrencia;
}
export interface IUltimaOcorrencia {
  dataLocalizacao: Date;
  dtDesaparecimento: Date;
  encontradoVivo: boolean;
  listaCartaz: unknown;
  localDesaparecimentoConcat: string;
  ocoId: number;
  ocorrenciaEntrevDesapDTO: IocorrenciaEntrevDesapDTO;
}

export interface IocorrenciaEntrevDesapDTO {
  informacao: string;
  vestimentasDesaparecido: string;
}
