import { ClientLinkUpdate } from '../../../../domain/usecases'
import { ClientLinkUpdateRepository } from '../../../protocols'

export class DbClientLinkUpdate implements ClientLinkUpdate {
  constructor(
    private readonly updateRepository: ClientLinkUpdateRepository,
  ) {
    this.updateRepository = updateRepository
  }

  async update(id: number, values: ClientLinkUpdate.Params): Promise<number> {
    return await this.updateRepository.update(id, values)
  }
}
