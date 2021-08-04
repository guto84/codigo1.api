import { ClientDelete } from '../../../../domain/usecases'

export interface ClientDeleteRepository {
  delete: (id: ClientDelete.Params) => Promise<ClientDelete.Result>
}

export namespace ClientDeleteRepository {
  export type Params = ClientDelete.Params
  export type Result = ClientDelete.Result
}
