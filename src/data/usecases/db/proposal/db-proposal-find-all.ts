import { ProposalFindAll } from '../../../../domain/usecases'
import { ProposalFindAllRepository } from '../../../protocols'

export class DbProposalFindAll implements ProposalFindAll {
  constructor(private readonly repository: ProposalFindAllRepository) {
    this.repository = repository
  }
  
  async findAll(): Promise<ProposalFindAll.Result[]> {
    return await this.repository.findAll()
  }
}
