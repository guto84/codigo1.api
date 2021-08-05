import { PaymentUpdate } from '../../../../domain/usecases'

export interface PaymentUpdateRepository {
  update: (id: number, values: PaymentUpdate.Params) => Promise<number>
}

export namespace PaymentUpdateRepository {
  export type Params = PaymentUpdate.Params
}
