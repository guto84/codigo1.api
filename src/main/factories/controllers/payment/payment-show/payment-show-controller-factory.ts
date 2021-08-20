import { Controller } from '../../../../../presentation/protocols'
import { PaymentRepository } from '../../../../../infra/db/mysql'
import { DbFindById } from '../../../../../data/usecases/db'
import { ShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makePaymentShowController = (): Controller => {
  const paymentRepository = new PaymentRepository()
  const dbFindById = new DbFindById(paymentRepository)
  const controller = new ShowController(dbFindById)
  return makeLogControllerDecorator(controller)
}
