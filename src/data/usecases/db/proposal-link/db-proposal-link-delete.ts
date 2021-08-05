import { ProposalLinkDelete } from '../../../../domain/usecases'
import { ProposalLinkDeleteRepository } from '../../../protocols'

export class DbProposalLinkDelete implements ProposalLinkDelete {
  constructor(private readonly repository: ProposalLinkDeleteRepository) {
    this.repository = repository
  }
  
  async delete(id: number): Promise<number> {
    return await this.repository.delete(id)
  }
}
