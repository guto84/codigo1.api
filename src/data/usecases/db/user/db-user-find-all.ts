import { UserFindAll } from '../../../../domain/usecases'

export class DbUserFindAll implements UserFindAll {
  constructor(private readonly repository) {
    this.repository = repository
  }
  async findAll(): Promise<UserFindAll.Result[]> {
    try {
      return await this.repository.findAll()
    } catch (error) {
      return null
    }
  }
}