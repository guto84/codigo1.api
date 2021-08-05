export interface ProposalLinkStore {
  store: (values: ProposalLinkStore.Params) => Promise<ProposalLinkStore.Result>
}

export namespace ProposalLinkStore {
  export type Params = {
    proposal_id: number
    name: string
    link: string
  }
  export type Result = {
    id: number
    proposal_id: number
    name: string
    link: string
  }
}
