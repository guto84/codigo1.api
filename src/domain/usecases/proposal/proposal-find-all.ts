import { ProposalModel } from '../../models'

export interface ProposalFindAll {
  findAll: () => Promise<ProposalFindAll.Result[]>
}

export namespace ProposalFindAll {
  export type Result = ProposalModel
}
