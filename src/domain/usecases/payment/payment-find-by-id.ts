import { PaymentModel } from '../../models'

export interface PaymentFindById {
  findById: (token: PaymentFindById.Params) => Promise<PaymentFindById.Result>
}

export namespace PaymentFindById {
  export type Params = number
  export type Result = PaymentModel
}
