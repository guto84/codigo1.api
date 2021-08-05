import { ProposalLinkStore } from '../../../../domain/usecases'
import { ProposalLinkStoreRepository } from '../../../protocols'

export class DbProposalLinkStore implements ProposalLinkStore {
  constructor(
    private readonly storeRepository: ProposalLinkStoreRepository
  ) {
    this.storeRepository = storeRepository
  }

  async store(values: ProposalLinkStore.Params): Promise<ProposalLinkStore.Result> {
    return await this.storeRepository.store(values)
  }
}
