import { FindAll } from '../../../domain/usecases'
import { FindAllRepository } from '../../protocols'

export class DbFindAll implements FindAll {
  constructor(private readonly repository: FindAllRepository) {
    this.repository = repository
  }

  async findAll(): Promise<object[]> {
    return await this.repository.findAll()
  }
}
