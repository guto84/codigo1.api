import { ClientModel } from '../../models'

export interface ClientFindById {
  findById: (token: ClientFindById.Params) => Promise<ClientFindById.Result>
}

export namespace ClientFindById {
  export type Params = number
  export type Result = ClientModel
}
