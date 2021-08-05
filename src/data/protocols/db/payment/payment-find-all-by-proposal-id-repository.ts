import { PaymentFindAllByProposalId } from '../../../../domain/usecases'

export interface PaymentFindAllByProposalIdRepository {
  findAllByProposalId: (Proposal_id: number) => Promise<PaymentFindAllByProposalId.Result[]>
}

export namespace PaymentFindAllByProposalIdRepository {
  export type Result = PaymentFindAllByProposalId.Result
}
