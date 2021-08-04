import { Controller } from '../../../../../presentation/protocols'
import { ClientLinkRepository } from '../../../../../infra/db/mysql'
import { DbClientLinkDelete } from '../../../../../data/usecases/db'
import { ClientLinkDeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientLinkDeleteController = (): Controller => {
  const clientLinkRepository = new ClientLinkRepository()
  const dbClientLinkDelete = new DbClientLinkDelete(clientLinkRepository)
  const controller = new ClientLinkDeleteController(dbClientLinkDelete)
  return makeLogControllerDecorator(controller)
}
