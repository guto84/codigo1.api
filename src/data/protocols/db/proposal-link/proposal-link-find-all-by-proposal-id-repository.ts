import { ProposalLinkFindAllByProposalId } from '../../../../domain/usecases'

export interface ProposalLinkFindAllByProposalIdRepository {
  findAllByProposalId: (Proposal_id: number) => Promise<ProposalLinkFindAllByProposalId.Result[]>
}

export namespace ProposalLinkFindAllByProposalIdRepository {
  export type Result = ProposalLinkFindAllByProposalId.Result
}
