import { PaymentFindById } from '../../../../domain/usecases'

export interface PaymentFindByIdRepository {
  findById: (id: PaymentFindById.Params) => Promise<PaymentFindById.Result>
}

export namespace PaymentFindByIdRepository {
  export type Params = PaymentFindById.Params
  export type Result = PaymentFindById.Result
}
