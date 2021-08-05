export interface PaymentStore {
  store: (values: PaymentStore.Params) => Promise<PaymentStore.Result>
}

export namespace PaymentStore {
  export type Params = {
    proposal_id: number
    amount: number
    method: string
    comments?: string
  }
  export type Result = {
    id: number
    proposal_id: number
    amount: number
    method: string
    comments?: string
  }
}
