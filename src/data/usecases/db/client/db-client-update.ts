import { ClientUpdate } from '../../../../domain/usecases'
import { ClientUpdateRepository } from '../../../protocols'

export class DbClientUpdate implements ClientUpdate {
  constructor(
    private readonly updateRepository: ClientUpdateRepository,
  ) {
    this.updateRepository = updateRepository
  }

  async update(id: number, values: ClientUpdate.Params): Promise<number> {
    return await this.updateRepository.update(id, values)
  }
}
