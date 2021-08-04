import { ClientFindById } from '../../../../domain/usecases'
import { ClientFindByIdRepository } from '../../../protocols'

export class DbClientFindById implements ClientFindById {
  constructor(private readonly repository: ClientFindByIdRepository) {
    this.repository = repository
  }
  
  async findById(id: ClientFindById.Params): Promise<ClientFindById.Result> {
    return await this.repository.findById(id)
  }
}
