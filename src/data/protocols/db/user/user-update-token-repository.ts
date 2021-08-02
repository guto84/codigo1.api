export interface UserUpdateTokenRepository {
  updateToken: (values: UserUpdateTokenRepository.Params) => Promise<UserUpdateTokenRepository.Result>
}

export namespace UserUpdateTokenRepository {
  export type Params = {
    id: number
    token: string
  }
  export type Result = number
}