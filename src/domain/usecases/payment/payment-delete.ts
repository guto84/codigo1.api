export interface PaymentDelete {
  delete: (id: PaymentDelete.Params) => Promise<PaymentDelete.Result>
}

export namespace PaymentDelete {
  export type Params = number
  export type Result = number
}
