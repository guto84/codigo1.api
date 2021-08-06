import { ClientFindById } from '../../../../domain/usecases'

export interface ClientFindByIdRepository {
  findById: (id: ClientFindById.Params) => Promise<ClientFindById.Result>
}

export namespace ClientFindByIdRepository {
  export type Params = ClientFindById.Params
  export type Result = ClientFindById.Result
}
