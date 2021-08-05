import { ProposalLinkUpdate } from '../../../../domain/usecases'

export interface ProposalLinkUpdateRepository {
  update: (id: number, values: ProposalLinkUpdate.Params) => Promise<number>
}

export namespace ProposalLinkUpdateRepository {
  export type Params = ProposalLinkUpdate.Params
}
