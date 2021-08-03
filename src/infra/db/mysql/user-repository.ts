import { db } from '../helpers'
import {
  UserFindByEmailRepository,
  UserFindByTokenRepository,
  UserStoreRepository,
  UserUpdatePasswordByEmailRepository,
  UserUpdateTokenRepository
} from '../../../data/protocols'

export class UserRepository implements
  UserStoreRepository,
  UserFindByTokenRepository,
  UserFindByEmailRepository,
  UserUpdateTokenRepository,
  UserUpdatePasswordByEmailRepository {

  async findByEmail(email: UserFindByEmailRepository.Params): Promise<UserFindByEmailRepository.Result> {
    return (await db('users').where({ email }).select('id', 'name', 'email', 'password')).shift()
  }

  async findByToken(token: UserFindByTokenRepository.Params): Promise<UserFindByTokenRepository.Result> {
    return (await db('users').where({ token }).select('id', 'name', 'email')).shift()
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

  async updatePasswordByEmail(email: string, password: string): Promise<number> {
    return await db('users').update({ password, updated_at: new Date }).where({ email })
  }
}
