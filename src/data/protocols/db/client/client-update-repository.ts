import { ClientUpdate } from '../../../../domain/usecases'

export interface ClientUpdateRepository {
  update: (id: number, values: ClientUpdate.Params) => Promise<number>
}

export namespace ClientUpdateRepository {
  export type Params = ClientUpdate.Params
}
