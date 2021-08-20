import { Controller } from '../../../../../presentation/protocols'
import { ClientLinkRepository } from '../../../../../infra/db/mysql'
import { DbFindAllByTenantId } from '../../../../../data/usecases/db'
import { ListTenantIdController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'
import { makeClientLinkListValidation } from './client-link-list-validation-factory'

export const makeClientLinkListController = (): Controller => {
  const clientLinkRepository = new ClientLinkRepository()
  const dbFindAllByTenantId = new DbFindAllByTenantId(clientLinkRepository)
  const controller = new ListTenantIdController('client_id', dbFindAllByTenantId, makeClientLinkListValidation())
  return makeLogControllerDecorator(controller)
}
