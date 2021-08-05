export interface ProposalLinkDelete {
  delete: (id: ProposalLinkDelete.Params) => Promise<ProposalLinkDelete.Result>
}

export namespace ProposalLinkDelete {
  export type Params = number
  export type Result = number
}
