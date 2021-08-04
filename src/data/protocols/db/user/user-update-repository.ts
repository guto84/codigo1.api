import { UserUpdate } from '../../../../domain/usecases'

export interface UserUpdateRepository {
  update: (id: number, values: UserUpdate.Params) => Promise<number>
}

export namespace UserUpdateRepository {
  export type Params = UserUpdate.Params
}
