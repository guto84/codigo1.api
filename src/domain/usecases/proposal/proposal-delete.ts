export interface ProposalDelete {
  delete: (id: ProposalDelete.Params) => Promise<ProposalDelete.Result>
}

export namespace ProposalDelete {
  export type Params = number
  export type Result = number
}
