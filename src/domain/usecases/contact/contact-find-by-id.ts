import { ContactModel } from '../../models'

export interface ContactFindById {
  findById: (token: ContactFindById.Params) => Promise<ContactFindById.Result>
}

export namespace ContactFindById {
  export type Params = number
  export type Result = ContactModel
}
