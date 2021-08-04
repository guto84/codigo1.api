import { ClientStore } from '../../../../domain/usecases'

export interface ClientStoreRepository {
  store: (values: ClientStore.Params) => Promise<ClientStore.Result>
}

export namespace ClientStoreRepository {
  export type Params = ClientStore.Params
  export type Result = ClientStore.Result
}
