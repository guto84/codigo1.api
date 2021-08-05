import { ContactUpdate } from '../../../../domain/usecases'
import { ContactUpdateRepository } from '../../../protocols'

export class DbContactUpdate implements ContactUpdate {
  constructor(
    private readonly updateRepository: ContactUpdateRepository,
  ) {
    this.updateRepository = updateRepository
  }

  async update(id: number, values: ContactUpdate.Params): Promise<number> {
    return await this.updateRepository.update(id, values)
  }
}
