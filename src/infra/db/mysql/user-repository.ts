import { db } from '../helpers'
import {
  UserFindByEmailRepository,
  UserFindByTokenRepository,
  UserStoreRepository,
  UserUpdatePasswordByEmailRepository,
  UserUpdateTokenRepository,
  FindAllRepository,
  UserFindByIdRepository,
  UserUpdateRepository,
  DeleteRepository,
  UserUploadRepository
} from '../../../data/protocols'

export class UserRepository implements
  UserStoreRepository,
  UserFindByTokenRepository,
  UserFindByEmailRepository,
  UserUpdateTokenRepository,
  UserUpdatePasswordByEmailRepository,
  FindAllRepository,
  UserFindByIdRepository,
  UserUpdateRepository,
  DeleteRepository,
  UserUploadRepository {

  async findAll(): Promise<object[]> {
    return await db('users').select('id', 'name', 'email')
  }

  async findById(id: number): Promise<UserFindByIdRepository.Result> {
    return (await db('users').select('id', 'name', 'email', 'filename').where({ id })).shift()
  }

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

  async update(id: number, values: UserUpdateRepository.Params): Promise<number> {
    const { name, email } = values
    return await db('users').update(values).where({ id })
  }

  async updateToken(values: UserUpdateTokenRepository.Params): Promise<UserUpdateTokenRepository.Result> {
    const { id, token } = values
    return await db('users').update({ token, updated_at: new Date }).where({ id })
  }

  async updatePasswordByEmail(email: string, password: string): Promise<number> {
    return await db('users').update({ password, updated_at: new Date }).where({ email })
  }

  async upload(id: number, values: UserUploadRepository.Params): Promise<number> {
    return await db('users').update(values).where({ id })
  }

  async delete(id: number): Promise<number> {
    return await db('users').del().where({ id })
  }
}
