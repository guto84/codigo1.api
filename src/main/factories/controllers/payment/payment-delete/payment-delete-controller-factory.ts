import { Controller } from '../../../../../presentation/protocols'
import { PaymentRepository } from '../../../../../infra/db/mysql'
import { DbDelete } from '../../../../../data/usecases/db'
import { DeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makePaymentDeleteController = (): Controller => {
  const paymentRepository = new PaymentRepository()
  const dbDelete = new DbDelete(paymentRepository)
  const controller = new DeleteController(dbDelete)
  return makeLogControllerDecorator(controller)
}
