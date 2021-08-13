import { ProposalModel } from '../../models'

export interface ProposalFindById {
  findById: (token: ProposalFindById.Params) => Promise<ProposalFindById.Result>
}

export namespace ProposalFindById {
  export type Params = number
  export type Result = ProposalModel
}
