import { UserModel } from '../../../domain/models'
import { UserStoreModel } from '../../../domain/usecases/user'

export interface UserStoreRepository {
  store(values: UserStoreModel): Promise<UserModel>
}
