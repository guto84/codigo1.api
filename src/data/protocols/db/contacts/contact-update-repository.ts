import { ContactUpdate } from '../../../../domain/usecases'

export interface ContactUpdateRepository {
  update: (id: number, values: ContactUpdate.Params) => Promise<number>
}

export namespace ContactUpdateRepository {
  export type Params = ContactUpdate.Params
}
