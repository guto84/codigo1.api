import { UserModel } from '../../models'

export interface UserFindAll {
  findAll: () => Promise<UserFindAll.Result[]>
}

export namespace UserFindAll {
  export type Result = UserModel
}
