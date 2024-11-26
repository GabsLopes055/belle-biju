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
