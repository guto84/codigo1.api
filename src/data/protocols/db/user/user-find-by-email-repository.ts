import { UserModel } from '../../../domain/models'

export interface UserFindByEmailRepository {
  findByEmail(email: string): Promise<UserModel>
}
