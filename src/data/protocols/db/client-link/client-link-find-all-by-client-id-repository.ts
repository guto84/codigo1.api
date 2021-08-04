import { ClientLinkFindAllByClientId } from '../../../../domain/usecases'

export interface ClientLinkFindAllByClientIdRepository {
  findAllByClientId: (client_id: number) => Promise<ClientLinkFindAllByClientId.Result[]>
}

export namespace ClientLinkFindAllByClientIdRepository {
  export type Result = ClientLinkFindAllByClientId.Result
}
