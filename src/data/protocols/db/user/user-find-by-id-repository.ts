import { UserFindById } from '../../../../domain/usecases'

export interface UserFindByIdRepository {
  findById: (id: UserFindById.Params) => Promise<UserFindById.Result>
}

export namespace UserFindByIdRepository {
  export type Params = UserFindById.Params
  export type Result = UserFindById.Result
}
