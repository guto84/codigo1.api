import { PaymentUpdate } from '../../../../domain/usecases'
import { PaymentUpdateRepository } from '../../../protocols'

export class DbPaymentUpdate implements PaymentUpdate {
  constructor(
    private readonly updateRepository: PaymentUpdateRepository,
  ) {
    this.updateRepository = updateRepository
  }

  async update(id: number, values: PaymentUpdate.Params): Promise<number> {
    return await this.updateRepository.update(id, values)
  }
}
