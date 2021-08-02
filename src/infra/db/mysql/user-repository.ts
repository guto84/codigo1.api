import { db } from '../helpers'
import { UserStoreRepository, UserFindByEmailRepository, UserUpdateTokenRepository } from '../../../data/protocols/db/user'

export class UserRepository implements UserStoreRepository, UserFindByEmailRepository, UserUpdateTokenRepository {

  async findByEmail(email: UserFindByEmailRepository.Params): Promise<UserFindByEmailRepository.Result> {
    return (await db('users').where({ email }).select('id', 'name', 'email', 'password')).shift()
  }

  async store(values: UserStoreRepository.Params): Promise<UserStoreRepository.Result> {
    const { name, email } = values
    const response = await db('users').insert(values)
    return { id: response.shift(), name, email }
  }

  async updateToken(values: UserUpdateTokenRepository.Params): Promise<UserUpdateTokenRepository.Result> {
    const { id, token } = values
    return await db('users').update({ token, updated_at: new Date }).where({ id })
  }
}
