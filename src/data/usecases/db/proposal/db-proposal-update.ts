import { ProposalUpdate } from '../../../../domain/usecases'
import { ProposalUpdateRepository } from '../../../protocols'

export class DbProposalUpdate implements ProposalUpdate {
  constructor(
    private readonly updateRepository: ProposalUpdateRepository,
  ) {
    this.updateRepository = updateRepository
  }

  async update(id: number, values: ProposalUpdate.Params): Promise<number> {
    return await this.updateRepository.update(id, values)
  }
}
