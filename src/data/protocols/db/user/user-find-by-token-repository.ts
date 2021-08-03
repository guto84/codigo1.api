export interface UserFindByTokenRepository {
  findByToken: (token: UserFindByTokenRepository.Params) => Promise<UserFindByTokenRepository.Result>
}

export namespace UserFindByTokenRepository {
  export type Params = string
  export type Result = {
    id: number
    name: string
    email: string
  }
}