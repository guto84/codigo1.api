export interface ProposalLinkFindAllByProposalId {
  findAllByProposalId: (Proposal_id: number) => Promise<ProposalLinkFindAllByProposalId.Result[]>
}

export namespace ProposalLinkFindAllByProposalId {
  export type Result = {
    id: number
    name: string
    link: string
  }
}
