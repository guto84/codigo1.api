import { ProposalFindById } from '../../../../domain/usecases'
import { ProposalFindByIdRepository } from '../../../protocols'

export class DbProposalFindById implements ProposalFindById {
  constructor(private readonly repository: ProposalFindByIdRepository) {
    this.repository = repository
  }

  async findById(id: ProposalFindById.Params): Promise<ProposalFindById.Result> {
    return await this.repository.findById(id)
  }
}
