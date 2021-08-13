import { ContactModel } from '../../models'

export interface ContactFindAllByClientId {
  findAllByClientId: (client_id: number) => Promise<ContactFindAllByClientId.Result[]>
}

export namespace ContactFindAllByClientId {
  export type Result = ContactModel
}
