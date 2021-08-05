import { ProposalLinkDelete } from '../../../../domain/usecases'

export interface ProposalLinkDeleteRepository {
  delete: (id: ProposalLinkDelete.Params) => Promise<ProposalLinkDelete.Result>
}

export namespace ProposalLinkDeleteRepository {
  export type Params = ProposalLinkDelete.Params
  export type Result = ProposalLinkDelete.Result
}
