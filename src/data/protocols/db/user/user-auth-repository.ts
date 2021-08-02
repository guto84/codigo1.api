import { UserAuth } from '../../../../domain/usecases'

export interface UserAuthRepository {
  auth(values: UserAuthRepository.Params): Promise<UserAuthRepository.Result>
}

export namespace UserAuthRepository {
  export type Params = UserAuth.Params
  export type Result = UserAuth.Result
}
