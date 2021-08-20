import { Controller } from '../../../../../presentation/protocols'
import { PaymentRepository } from '../../../../../infra/db/mysql'
import { DbFindAllByTenantId } from '../../../../../data/usecases/db'
import { ListTenantIdController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'
import { makePaymentListValidation } from './payment-list-validation-factory'

export const makePaymentListController = (): Controller => {
  const paymentRepository = new PaymentRepository()
  const dbFindAllByTenantId = new DbFindAllByTenantId(paymentRepository)
  const controller = new ListTenantIdController('proposal_id', dbFindAllByTenantId, makePaymentListValidation())
  return makeLogControllerDecorator(controller)
}
