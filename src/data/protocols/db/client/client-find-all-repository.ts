import { ClientFindAll } from '../../../../domain/usecases'

export interface ClientFindAllRepository {
  findAll: () => Promise<ClientFindAll.Result[]>
}

export namespace ClientFindAllRepository {
  export type Result = ClientFindAll.Result
}
