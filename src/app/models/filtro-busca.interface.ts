export interface filtroDeBusca {
  page: number;
  limit: number;
}

export interface EntityPaginated<T> {
  totalCount: number;
  itens: T[];
}
