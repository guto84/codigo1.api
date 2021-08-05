export interface PaymentFindAllByProposalId {
  findAllByProposalId: (proposal_id: number) => Promise<PaymentFindAllByProposalId.Result[]>
}

export namespace PaymentFindAllByProposalId {
  export type Result = {
    id: number
    amount: number
    method: string
    comments?: string
  }
}
