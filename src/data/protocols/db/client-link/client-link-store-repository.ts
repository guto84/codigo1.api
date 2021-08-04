import { ClientLinkStore } from '../../../../domain/usecases'

export interface ClientLinkStoreRepository {
  store: (values: ClientLinkStore.Params) => Promise<ClientLinkStore.Result>
}

export namespace ClientLinkStoreRepository {
  export type Params = ClientLinkStore.Params
  export type Result = ClientLinkStore.Result
}
