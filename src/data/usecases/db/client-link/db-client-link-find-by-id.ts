import { ClientLinkFindById } from '../../../../domain/usecases'
import { ClientLinkFindByIdRepository } from '../../../protocols'

export class DbClientLinkFindById implements ClientLinkFindById {
  constructor(private readonly repository: ClientLinkFindByIdRepository) {
    this.repository = repository
  }
  
  async findById(id: ClientLinkFindById.Params): Promise<ClientLinkFindById.Result> {
    return await this.repository.findById(id)
  }
}
