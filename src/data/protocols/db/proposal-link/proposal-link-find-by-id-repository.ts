import { ProposalLinkFindById } from '../../../../domain/usecases'

export interface ProposalLinkFindByIdRepository {
  findById: (id: ProposalLinkFindById.Params) => Promise<ProposalLinkFindById.Result>
}

export namespace ProposalLinkFindByIdRepository {
  export type Params = ProposalLinkFindById.Params
  export type Result = ProposalLinkFindById.Result
}
