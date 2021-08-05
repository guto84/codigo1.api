import { Controller } from '../../../../../presentation/protocols'
import { PaymentRepository } from '../../../../../infra/db/mysql'
import { DbPaymentStore } from '../../../../../data/usecases/db'
import { PaymentStoreController } from '../../../../../presentation/controllers'
import { makePaymentStoreValidation } from './payment-store-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makePaymentStoreController = (): Controller => {
  const paymentRepository = new PaymentRepository()
  const dbPaymentStore = new DbPaymentStore(paymentRepository)
  const controller = new PaymentStoreController(dbPaymentStore, makePaymentStoreValidation())
  return makeLogControllerDecorator(controller)
}
