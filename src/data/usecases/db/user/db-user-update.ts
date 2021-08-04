import { UserUpdate } from '../../../../domain/usecases'
import { UserFindByEmailRepository, UserUpdateRepository } from '../../../protocols'

export class DbUserUpdate implements UserUpdate {
  constructor(
    private readonly updateRepository: UserUpdateRepository,
    private readonly findByEmailRepository: UserFindByEmailRepository
  ) {
    this.updateRepository = updateRepository
  }

  async update(id: number, values: UserUpdate.Params): Promise<number> {
    const user = await this.findByEmailRepository.findByEmail(values.email)
    if(!user || user.id == id) {
      return await this.updateRepository.update(id, values)
    }
    return null
  }
}
