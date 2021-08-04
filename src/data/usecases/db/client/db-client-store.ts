import { ClientStore } from '../../../../domain/usecases'
import { ClientStoreRepository } from '../../../protocols'

export class DbClientStore implements ClientStore {
  constructor(
    private readonly storeRepository: ClientStoreRepository
  ) {
    this.storeRepository = storeRepository
  }

  async store(values: ClientStore.Params): Promise<ClientStore.Result> {
    return await this.storeRepository.store(values)
  }
}
