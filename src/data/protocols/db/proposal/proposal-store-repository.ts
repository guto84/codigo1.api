import { ProposalStore } from '../../../../domain/usecases'

export interface ProposalStoreRepository {
  store: (values: ProposalStore.Params) => Promise<ProposalStore.Result>
}

export namespace ProposalStoreRepository {
  export type Params = ProposalStore.Params
  export type Result = ProposalStore.Result
}
