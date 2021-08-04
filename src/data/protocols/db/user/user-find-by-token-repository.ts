import { UserFindByToken } from '../../../../domain/usecases'

export interface UserFindByTokenRepository {
  findByToken: (token: UserFindByToken.Params) => Promise<UserFindByToken.Result>
}

export namespace UserFindByTokenRepository {
  export type Params = UserFindByToken.Params
  export type Result = UserFindByToken.Result
}