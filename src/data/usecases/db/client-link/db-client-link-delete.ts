import { ClientLinkDelete } from '../../../../domain/usecases'
import { ClientLinkDeleteRepository } from '../../../protocols'

export class DbClientLinkDelete implements ClientLinkDelete {
  constructor(private readonly repository: ClientLinkDeleteRepository) {
    this.repository = repository
  }
  
  async delete(id: number): Promise<number> {
    return await this.repository.delete(id)
  }
}
