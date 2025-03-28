export interface IPessoas {
  id: number;
  idade: number;
  nome: string;
  sexo: string;
  urlFoto: any;
  vivo: boolean;
  ultimaOcorrencia: IUltimaOcorrencia;
}
export interface IUltimaOcorrencia {
  dataLocalizacao: Date;
  dtDesaparecimento: Date;
  encontradoVivo: boolean;
  listaCartaz: any;
  localDesaparecimentoConcat: string;
  ocoId: number;
  ocorrenciaEntrevDesapDTO: IocorrenciaEntrevDesapDTO;
}

export interface IocorrenciaEntrevDesapDTO {
  informacao: Date;
  vestimentasDesaparecido: Date;
}
