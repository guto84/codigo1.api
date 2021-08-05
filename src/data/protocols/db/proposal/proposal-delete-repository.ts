import { ProposalDelete } from '../../../../domain/usecases'

export interface ProposalDeleteRepository {
  delete: (id: ProposalDelete.Params) => Promise<ProposalDelete.Result>
}

export namespace ProposalDeleteRepository {
  export type Params = ProposalDelete.Params
  export type Result = ProposalDelete.Result
}
