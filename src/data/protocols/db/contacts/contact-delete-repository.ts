import { ContactDelete } from '../../../../domain/usecases'

export interface ContactDeleteRepository {
  delete: (id: ContactDelete.Params) => Promise<ContactDelete.Result>
}

export namespace ContactDeleteRepository {
  export type Params = ContactDelete.Params
  export type Result = ContactDelete.Result
}
