import { ClientModel } from '../../models'

export interface ClientFindAll {
  findAll: () => Promise<ClientFindAll.Result[]>
}

export namespace ClientFindAll {
  export type Result = ClientModel
}
