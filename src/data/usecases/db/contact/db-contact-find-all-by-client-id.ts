import { ContactFindAllByClientId } from '../../../../domain/usecases'
import { ContactFindAllByClientIdRepository } from '../../../protocols'

export class DbContactFindAllByClientId implements ContactFindAllByClientId {
  constructor(private readonly repository: ContactFindAllByClientIdRepository) {
    this.repository = repository
  }
  
  async findAllByClientId(client_id: number): Promise<ContactFindAllByClientId.Result[]> {
    return await this.repository.findAllByClientId(client_id)
  }
}
