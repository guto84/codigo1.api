import { ClientLinkFindAllByClientId } from '../../../../domain/usecases'
import { ClientLinkFindAllByClientIdRepository } from '../../../protocols'

export class DbClientLinkFindAllByClientId implements ClientLinkFindAllByClientId {
  constructor(private readonly repository: ClientLinkFindAllByClientIdRepository) {
    this.repository = repository
  }

  async findAllByClientId(client_id: number): Promise<ClientLinkFindAllByClientId.Result[]> {
    return await this.repository.findAllByClientId(client_id)
  }
}
