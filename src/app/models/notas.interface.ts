export interface requestNotas {
  dataAvaliacao: string;
  observacao: string;
  nota: number;
  tipoAvaliacao: string;
  periodo: string;
  materia: string;
}

export interface responseNotas {
  dataAvaliacao: string;
  observacao: string;
  nota: number;
  tipoAvaliacao: string;
  periodo: string;
  materia: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface notasPorBimestre {
  nomeAluno: string,
  primeiroBimestre: string,
  segundoBimestre: string,
  terceiroBimestre: string,
  quartoBimestre: string,
  media: string
}
