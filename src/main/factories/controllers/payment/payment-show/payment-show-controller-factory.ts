import { Controller } from '../../../../../presentation/protocols'
import { PaymentRepository } from '../../../../../infra/db/mysql'
import { DbPaymentFindById } from '../../../../../data/usecases/db'
import { PaymentShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makePaymentShowController = (): Controller => {
  const paymentRepository = new PaymentRepository()
  const dbPaymentFindById = new DbPaymentFindById(paymentRepository)
  const controller = new PaymentShowController(dbPaymentFindById)
  return makeLogControllerDecorator(controller)
}
