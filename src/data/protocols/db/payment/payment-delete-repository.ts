import { PaymentDelete } from '../../../../domain/usecases'

export interface PaymentDeleteRepository {
  delete: (id: PaymentDelete.Params) => Promise<PaymentDelete.Result>
}

export namespace PaymentDeleteRepository {
  export type Params = PaymentDelete.Params
  export type Result = PaymentDelete.Result
}
