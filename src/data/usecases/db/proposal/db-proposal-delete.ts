import { ProposalDelete } from '../../../../domain/usecases'
import { ProposalDeleteRepository } from '../../../protocols'

export class DbProposalDelete implements ProposalDelete {
  constructor(private readonly repository: ProposalDeleteRepository) {
    this.repository = repository
  }

  async delete(id: number): Promise<number> {
    return await this.repository.delete(id)
  }
}
