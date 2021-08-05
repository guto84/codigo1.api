import { PaymentFindById } from '../../../../domain/usecases'
import { PaymentFindByIdRepository } from '../../../protocols'

export class DbPaymentFindById implements PaymentFindById {
  constructor(private readonly repository: PaymentFindByIdRepository) {
    this.repository = repository
  }
  
  async findById(id: PaymentFindById.Params): Promise<PaymentFindById.Result> {
    return await this.repository.findById(id)
  }
}
