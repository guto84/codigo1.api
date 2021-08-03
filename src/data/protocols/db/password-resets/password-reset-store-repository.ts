export interface PasswordResetStoreRepository {
  store: (token: PasswordResetStoreRepository.Params) => Promise<PasswordResetStoreRepository.Result>
}

export namespace PasswordResetStoreRepository {
  export type Params = {
    uuid: string
    email: string
  }
  export type Result = {
    uuid: string
    email: string
  }
}
