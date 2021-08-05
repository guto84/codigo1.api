import { ProposalLinkStore } from '../../../../domain/usecases'

export interface ProposalLinkStoreRepository {
  store: (values: ProposalLinkStore.Params) => Promise<ProposalLinkStore.Result>
}

export namespace ProposalLinkStoreRepository {
  export type Params = ProposalLinkStore.Params
  export type Result = ProposalLinkStore.Result
}
