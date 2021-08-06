import { ClientLinkFindById } from '../../../../domain/usecases'

export interface ClientLinkFindByIdRepository {
  findById: (id: ClientLinkFindById.Params) => Promise<ClientLinkFindById.Result>
}

export namespace ClientLinkFindByIdRepository {
  export type Params = ClientLinkFindById.Params
  export type Result = ClientLinkFindById.Result
}
