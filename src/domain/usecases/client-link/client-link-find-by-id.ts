import { ClientLinkModel } from '../../models'

export interface ClientLinkFindById {
  findById: (token: ClientLinkFindById.Params) => Promise<ClientLinkFindById.Result>
}

export namespace ClientLinkFindById {
  export type Params = number
  export type Result = ClientLinkModel
}
