import { ProposalLinkFindById } from '../../../../domain/usecases'
import { ProposalLinkFindByIdRepository } from '../../../protocols'

export class DbProposalLinkFindById implements ProposalLinkFindById {
  constructor(private readonly repository: ProposalLinkFindByIdRepository) {
    this.repository = repository
  }

  async findById(id: ProposalLinkFindById.Params): Promise<ProposalLinkFindById.Result> {
    return await this.repository.findById(id)
  }
}
