import { PaymentStore } from '../../../../domain/usecases'

export interface PaymentStoreRepository {
  store: (values: PaymentStore.Params) => Promise<PaymentStore.Result>
}

export namespace PaymentStoreRepository {
  export type Params = PaymentStore.Params
  export type Result = PaymentStore.Result
}
