import { db } from '../helpers'
import { UserModel } from '../../../domain/models'
import { UserStoreModel } from '../../../domain/usecases/user'
import { UserStoreRepository, UserFindByEmailRepository } from '../../../data/protocols/db/user'

export class UserRepository implements UserStoreRepository, UserFindByEmailRepository {

  async findByEmail(email: string): Promise<UserModel> {
    return (await db('users').where({ email }).select('id', 'name', 'email')).shift()
  }

  async store(values: UserStoreModel): Promise<UserModel> {
    const response = await db('users').insert(values)
    return { id: response.shift(), name: values.name, email: values.email }
  }
}
