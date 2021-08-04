import { ClientLinkStore } from '../../../../domain/usecases'
import { ClientLinkStoreRepository } from '../../../protocols'

export class DbClientLinkStore implements ClientLinkStore {
  constructor(
    private readonly storeRepository: ClientLinkStoreRepository
  ) {
    this.storeRepository = storeRepository
  }

  async store(values: ClientLinkStore.Params): Promise<ClientLinkStore.Result> {
    return await this.storeRepository.store(values)
  }
}
