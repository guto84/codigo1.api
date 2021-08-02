import { UserStore } from '../../../../domain/usecases'

export interface UserStoreRepository {
  store: (values: UserStoreRepository.Params) => Promise<UserStoreRepository.Result>
}

export namespace UserStoreRepository {
  export type Params = UserStore.Params
  export type Result = UserStore.Result
}
