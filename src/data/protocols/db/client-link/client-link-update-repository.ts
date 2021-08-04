import { ClientLinkUpdate } from '../../../../domain/usecases'

export interface ClientLinkUpdateRepository {
  update: (id: number, values: ClientLinkUpdate.Params) => Promise<number>
}

export namespace ClientLinkUpdateRepository {
  export type Params = ClientLinkUpdate.Params
}
