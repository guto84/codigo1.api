export interface PaymentUpdate {
  update: (id: number, values: PaymentUpdate.Params) => Promise<number>
}

export namespace PaymentUpdate {
  export type Params = {
    amount: number
    method: string
    comments?: string
  }
}
