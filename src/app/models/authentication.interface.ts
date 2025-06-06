export interface AuthenticationRequest {
  username: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  provider: string;
  socialId?: any;
  firstName: string;
  lastName: string;
  role: Role;
  status: Role;
  createdAt: string;
  updatedAt: string;
}

interface Role {
  id: string;
}

interface Photo {
  id: string;
  path: string;
}

interface Role {
  id: string;
  name: string;
}

interface Status {
  id: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: User;
}

export enum StepsRegister {
  EMAIL_CORPORATIVO = 1,
  DADOS_CADASTRAIS = 2,
  SELFIE = 3,
  SENHA = 4
}
