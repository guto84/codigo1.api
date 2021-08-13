import { ClientLinkModel } from '../../models'

export interface ClientLinkFindAllByClientId {
  findAllByClientId: (client_id: number) => Promise<ClientLinkFindAllByClientId.Result[]>
}

export namespace ClientLinkFindAllByClientId {
  export type Result = ClientLinkModel
}
