import { UserStore } from '../../../../domain/usecases'

export interface UserStoreRepository {
  store: (values: UserStore.Params) => Promise<UserStore.Result>
}

export namespace UserStoreRepository {
  export type Params = UserStore.Params
  export type Result = UserStore.Result
}
