import { ContactStore } from '../../../../domain/usecases'
import { ContactStoreRepository } from '../../../protocols'

export class DbContactStore implements ContactStore {
  constructor(
    private readonly storeRepository: ContactStoreRepository
  ) {
    this.storeRepository = storeRepository
  }

  async store(values: ContactStore.Params): Promise<ContactStore.Result> {
    return await this.storeRepository.store(values)
  }
}
