import { ProposalLinkFindAllByProposalId } from '../../../../domain/usecases'
import { ProposalLinkFindAllByProposalIdRepository } from '../../../protocols'

export class DbProposalLinkFindAllByProposalId implements ProposalLinkFindAllByProposalId {
  constructor(private readonly repository: ProposalLinkFindAllByProposalIdRepository) {
    this.repository = repository
  }

  async findAllByProposalId(proposal_id: number): Promise<ProposalLinkFindAllByProposalId.Result[]> {
    return await this.repository.findAllByProposalId(proposal_id)
  }
}
