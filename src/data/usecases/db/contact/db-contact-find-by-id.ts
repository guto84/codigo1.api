import { ContactFindById } from '../../../../domain/usecases'
import { ContactFindByIdRepository } from '../../../protocols'

export class DbContactFindById implements ContactFindById {
  constructor(private readonly repository: ContactFindByIdRepository) {
    this.repository = repository
  }
  
  async findById(id: ContactFindById.Params): Promise<ContactFindById.Result> {
    return await this.repository.findById(id)
  }
}
