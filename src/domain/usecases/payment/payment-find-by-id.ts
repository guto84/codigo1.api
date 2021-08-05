export interface PaymentFindById {
  findById: (token: PaymentFindById.Params) => Promise<PaymentFindById.Result>
}

export namespace PaymentFindById {
  export type Params = number
  export type Result = {
    id: number
    amount: number
    method: string
    comments?: string
  }
}
