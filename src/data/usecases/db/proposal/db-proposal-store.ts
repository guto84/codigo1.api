import { ProposalStore } from '../../../../domain/usecases'
import { ProposalStoreRepository } from '../../../protocols'

export class DbProposalStore implements ProposalStore {
  constructor(
    private readonly storeRepository: ProposalStoreRepository
  ) {
    this.storeRepository = storeRepository
  }

  async store(values: ProposalStore.Params): Promise<ProposalStore.Result> {
    return await this.storeRepository.store(values)
  }
}
