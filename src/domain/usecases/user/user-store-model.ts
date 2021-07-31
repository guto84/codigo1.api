import { UserModel } from '../../models'

export interface UserStoreModel {
  name: string
  email: string
  password: string
}

export interface UserStore {
  store(values: UserStoreModel): Promise<UserModel>
}
