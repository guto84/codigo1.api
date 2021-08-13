import { ClientModel } from '../../models'

export interface ClientStore {
  store: (values: ClientStore.Params) => Promise<ClientStore.Result>
}

export namespace ClientStore {
  export type Params = {
    name: string
  }
  export type Result = ClientModel
}
