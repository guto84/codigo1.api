export interface ProposalUpdate {
  update: (id: number, values: ProposalUpdate.Params) => Promise<number>
}

export namespace ProposalUpdate {
  export type Params = {
    client_id: number
    ref: string
    amount: number
  }
}
