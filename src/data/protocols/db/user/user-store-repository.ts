export interface UserStoreRepository {
  store: (values: UserStoreRepository.Params) => Promise<UserStoreRepository.Result>
}

export namespace UserStoreRepository {
  export type Params = {
    name: string
    email: string
    password: string
  }
  export type Result = {
    id: number
    name: string
    email: string
  }
}
