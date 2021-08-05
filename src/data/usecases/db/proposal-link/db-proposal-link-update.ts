import { ProposalLinkUpdate } from '../../../../domain/usecases'
import { ProposalLinkUpdateRepository } from '../../../protocols'

export class DbProposalLinkUpdate implements ProposalLinkUpdate {
  constructor(
    private readonly updateRepository: ProposalLinkUpdateRepository,
  ) {
    this.updateRepository = updateRepository
  }

  async update(id: number, values: ProposalLinkUpdate.Params): Promise<number> {
    return await this.updateRepository.update(id, values)
  }
}
