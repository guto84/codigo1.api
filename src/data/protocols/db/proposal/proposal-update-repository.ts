import { ProposalUpdate } from '../../../../domain/usecases'

export interface ProposalUpdateRepository {
  update: (id: number, values: ProposalUpdate.Params) => Promise<number>
}

export namespace ProposalUpdateRepository {
  export type Params = ProposalUpdate.Params
}
