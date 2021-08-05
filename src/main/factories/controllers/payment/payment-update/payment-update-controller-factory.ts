import { Controller } from '../../../../../presentation/protocols'
import { PaymentRepository } from '../../../../../infra/db/mysql'
import { DbPaymentUpdate } from '../../../../../data/usecases/db'
import { PaymentUpdateController } from '../../../../../presentation/controllers'
import { makePaymentUpdateValidation } from './payment-update-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makePaymentUpdateController = (): Controller => {
  const paymentRepository = new PaymentRepository()
  const dbPaymentUpdate = new DbPaymentUpdate(paymentRepository)
  const controller = new PaymentUpdateController(dbPaymentUpdate, makePaymentUpdateValidation())
  return makeLogControllerDecorator(controller)
}
