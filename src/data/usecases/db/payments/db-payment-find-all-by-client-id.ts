import { PaymentFindAllByProposalId } from '../../../../domain/usecases'
import { PaymentFindAllByProposalIdRepository } from '../../../protocols'

export class DbPaymentFindAllByProposalId implements PaymentFindAllByProposalId {
  constructor(private readonly repository: PaymentFindAllByProposalIdRepository) {
    this.repository = repository
  }

  async findAllByProposalId(proposal_id: number): Promise<PaymentFindAllByProposalId.Result[]> {
    return await this.repository.findAllByProposalId(proposal_id)
  }
}
