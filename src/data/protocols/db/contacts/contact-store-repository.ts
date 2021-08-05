import { ContactStore } from '../../../../domain/usecases'

export interface ContactStoreRepository {
  store: (values: ContactStore.Params) => Promise<ContactStore.Result>
}

export namespace ContactStoreRepository {
  export type Params = ContactStore.Params
  export type Result = ContactStore.Result
}
