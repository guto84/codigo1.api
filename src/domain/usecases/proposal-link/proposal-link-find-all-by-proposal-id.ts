import { ProposalLinkModel } from '../../models'

export interface ProposalLinkFindAllByProposalId {
  findAllByProposalId: (proposal_id: number) => Promise<ProposalLinkFindAllByProposalId.Result[]>
}

export namespace ProposalLinkFindAllByProposalId {
  export type Result = ProposalLinkModel
}
