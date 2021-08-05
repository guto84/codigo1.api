import { Controller } from '../../../../../presentation/protocols'
import { PaymentRepository } from '../../../../../infra/db/mysql'
import { DbPaymentFindAllByProposalId } from '../../../../../data/usecases/db'
import { PaymentListController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'
import {makePaymentListValidation} from './payment-list-validation-factory'

export const makePaymentListController = (): Controller => {
  const paymentRepository = new PaymentRepository()
  const dbPaymentFindAllByProposalId = new DbPaymentFindAllByProposalId(paymentRepository)
  const controller = new PaymentListController(dbPaymentFindAllByProposalId, makePaymentListValidation())
  return makeLogControllerDecorator(controller)
}
