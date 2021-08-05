import { PaymentStore } from '../../../../domain/usecases'
import { PaymentStoreRepository } from '../../../protocols'

export class DbPaymentStore implements PaymentStore {
  constructor(
    private readonly storeRepository: PaymentStoreRepository
  ) {
    this.storeRepository = storeRepository
  }

  async store(values: PaymentStore.Params): Promise<PaymentStore.Result> {
    return await this.storeRepository.store(values)
  }
}
