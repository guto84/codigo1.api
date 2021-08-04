import { ClientLinkDelete } from '../../../../domain/usecases'

export interface ClientLinkDeleteRepository {
  delete: (id: ClientLinkDelete.Params) => Promise<ClientLinkDelete.Result>
}

export namespace ClientLinkDeleteRepository {
  export type Params = ClientLinkDelete.Params
  export type Result = ClientLinkDelete.Result
}
