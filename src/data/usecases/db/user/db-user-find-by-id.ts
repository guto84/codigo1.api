import { UserFindById } from '../../../../domain/usecases'
import { UserFindByIdRepository } from '../../../protocols'

export class DbUserFindById implements UserFindById {
  constructor(private readonly repository: UserFindByIdRepository) {
    this.repository = repository
  }
  async findById(id: UserFindById.Params): Promise<UserFindById.Result> {
    try {
      return await this.repository.findById(id)
    } catch (error) {
      return null
    }
  }
}
