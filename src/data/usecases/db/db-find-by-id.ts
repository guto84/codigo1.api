import { FindById } from '../../../domain/usecases'
import { FindByIdRepository } from '../../protocols'

export class DbFindById implements FindById {
  constructor(private readonly repository: FindByIdRepository) {
    this.repository = repository
  }

  async findById(id: number): Promise<object> {
    return await this.repository.findById(id)
  }
}
