export interface alunos {
  nome: string;
  responsavel: string;
  email_responsavel: string;
}

export interface alunoRequest {
  uf: string;
  cidade: string;
  bairro: string;
  complemento: string;
  numeroEndereco: string;
  endereco: string;
  cep: string;
  emailResponsavel: string;
  nomeResponsavel: string;
  condicaoMedica: string;
  medicacao: string;
  alergias: string;
  genero: string;
  dataNascimento: string;
  cpf: string;
  nome: string;
}

export interface alunoResponse {
  uf: string;
  cidade: string;
  bairro: string;
  complemento: string;
  numeroEndereco: string;
  endereco: string;
  cep: string;
  emailResponsavel: string;
  nomeResponsavel: string;
  condicaoMedica: string;
  medicacao: string;
  alergias: string;
  genero: string;
  dataNascimento: string;
  cpf: string;
  nome: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface listaAlunosResponse {
  data: alunoResponse[];
  hasNextPage: boolean;
}
