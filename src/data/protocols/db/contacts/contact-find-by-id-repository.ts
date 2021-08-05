import { ContactFindById } from '../../../../domain/usecases'

export interface ContactFindByIdRepository {
  findById: (id: ContactFindById.Params) => Promise<ContactFindById.Result>
}

export namespace ContactFindByIdRepository {
  export type Params = ContactFindById.Params
  export type Result = ContactFindById.Result
}