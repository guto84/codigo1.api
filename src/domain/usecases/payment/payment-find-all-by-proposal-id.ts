import { PaymentModel } from '../../models'

export interface PaymentFindAllByProposalId {
  findAllByProposalId: (proposal_id: number) => Promise<PaymentFindAllByProposalId.Result[]>
}

export namespace PaymentFindAllByProposalId {
  export type Result = PaymentModel
}
