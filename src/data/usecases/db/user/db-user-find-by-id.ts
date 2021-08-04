import { UserFindById } from '../../../../domain/usecases'
import { UserFindByIdRepository } from '../../../protocols'

export class DbUserFindById implements UserFindById {
  constructor(private readonly repository: UserFindByIdRepository) {
    this.repository = repository
  }
  
  async findById(id: UserFindById.Params): Promise<UserFindById.Result> {
    return await this.repository.findById(id)
  }
}
