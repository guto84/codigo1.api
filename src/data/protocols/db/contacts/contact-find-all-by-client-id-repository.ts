import { ContactFindAllByClientId } from '../../../../domain/usecases'

export interface ContactFindAllByClientIdRepository {
  findAllByClientId: (client_id: number) => Promise<ContactFindAllByClientId.Result[]>
}

export namespace ContactFindAllByClientIdRepository {
  export type Result = ContactFindAllByClientId.Result
}
