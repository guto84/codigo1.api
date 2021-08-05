export interface ProposalStore {
  store: (values: ProposalStore.Params) => Promise<ProposalStore.Result>
}

export namespace ProposalStore {
  export type Params = {
    client_id: number
    ref: string
    amount: number
    confirmation_date?: Date
  }
  export type Result = {
    id: number
    client_id: number
    ref: string
    amount: number
    confirmation_date?: Date
  }
}
