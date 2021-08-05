export interface ProposalFindById {
  findById: (token: ProposalFindById.Params) => Promise<ProposalFindById.Result>
}

export namespace ProposalFindById {
  export type Params = number
  export type Result = {
    id: number
    client: string
    ref: string
    amount: number
    confirmation_date: Date
  }
}
