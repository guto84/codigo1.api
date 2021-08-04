import { UserFindAll } from '../../../../domain/usecases'

export interface UserFindAllRepository {
  findAll: () => Promise<UserFindAll.Result[]>
}

export namespace UserFindAllRepository {
  export type Result = UserFindAll.Result
}
