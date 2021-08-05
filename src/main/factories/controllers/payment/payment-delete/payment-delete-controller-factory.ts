import { Controller } from '../../../../../presentation/protocols'
import { PaymentRepository } from '../../../../../infra/db/mysql'
import { DbPaymentDelete } from '../../../../../data/usecases/db'
import { PaymentDeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makePaymentDeleteController = (): Controller => {
  const paymentRepository = new PaymentRepository()
  const dbPaymentDelete = new DbPaymentDelete(paymentRepository)
  const controller = new PaymentDeleteController(dbPaymentDelete)
  return makeLogControllerDecorator(controller)
}
