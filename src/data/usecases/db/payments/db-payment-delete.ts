import { PaymentDelete } from '../../../../domain/usecases'
import { PaymentDeleteRepository } from '../../../protocols'

export class DbPaymentDelete implements PaymentDelete {
  constructor(private readonly repository: PaymentDeleteRepository) {
    this.repository = repository
  }

  async delete(id: number): Promise<number> {
    return await this.repository.delete(id)
  }
}
