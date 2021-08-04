import { Controller } from '../../../../../presentation/protocols'
import { ClientLinkRepository } from '../../../../../infra/db/mysql'
import { DbClientLinkUpdate } from '../../../../../data/usecases/db'
import { ClientLinkUpdateController } from '../../../../../presentation/controllers'
import { makeClientLinkUpdateValidation } from './client-link-update-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientLinkUpdateController = (): Controller => {
  const clientLinkRepository = new ClientLinkRepository()
  const dbClientLinkUpdate = new DbClientLinkUpdate(clientLinkRepository)
  const controller = new ClientLinkUpdateController(dbClientLinkUpdate, makeClientLinkUpdateValidation())
  return makeLogControllerDecorator(controller)
}
