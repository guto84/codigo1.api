import { db } from '../helpers'
import { PasswordResetFindByUuidRepository, PasswordResetStoreRepository } from '../../../data/protocols'

export class PasswordResetRepository implements PasswordResetFindByUuidRepository, PasswordResetStoreRepository {

  async findByUuid(uuid: PasswordResetFindByUuidRepository.Params): Promise<PasswordResetFindByUuidRepository.Result> {
    return (await db('password_resets').where({ uuid }).select()).shift()
  }

  async store(values: PasswordResetStoreRepository.Params): Promise<PasswordResetStoreRepository.Result> {
    const { uuid, email } = values
    await db('password_resets').insert(values)
    return { uuid, email }
  }
}
