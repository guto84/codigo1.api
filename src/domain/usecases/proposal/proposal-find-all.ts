export interface ProposalFindAll {
  findAll: () => Promise<ProposalFindAll.Result[]>
}

export namespace ProposalFindAll{
  export type Result = {
    id: number
    client: string
    ref: string
    amount: number
    confirmation_date: Date
  }
}
