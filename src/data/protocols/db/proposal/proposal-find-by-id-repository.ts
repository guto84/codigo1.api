import { ProposalFindById } from '../../../../domain/usecases'

export interface ProposalFindByIdRepository {
  findById: (id: ProposalFindById.Params) => Promise<ProposalFindById.Result>
}

export namespace ProposalFindByIdRepository {
  export type Params = ProposalFindById.Params
  export type Result = ProposalFindById.Result
}
