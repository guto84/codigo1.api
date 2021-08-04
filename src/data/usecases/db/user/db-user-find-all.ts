import { UserFindAll } from '../../../../domain/usecases'
import { UserFindAllRepository } from '../../../protocols'

export class DbUserFindAll implements UserFindAll {
  constructor(private readonly repository: UserFindAllRepository) {
    this.repository = repository
  }
  
  async findAll(): Promise<UserFindAll.Result[]> {
    return await this.repository.findAll()
  }
}
