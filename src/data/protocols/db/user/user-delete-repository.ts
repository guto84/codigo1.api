import { UserDelete } from '../../../../domain/usecases'

export interface UserDeleteRepository {
  delete: (id: UserDelete.Params) => Promise<UserDelete.Result>
}

export namespace UserDeleteRepository {
  export type Params = UserDelete.Params
  export type Result = UserDelete.Result
}
