import { Controller } from '../../../../../presentation/protocols'
import { ClientLinkRepository } from '../../../../../infra/db/mysql'
import { DbDelete } from '../../../../../data/usecases/db'
import { DeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientLinkDeleteController = (): Controller => {
  const clientLinkRepository = new ClientLinkRepository()
  const dbDelete = new DbDelete(clientLinkRepository)
  const controller = new DeleteController(dbDelete)
  return makeLogControllerDecorator(controller)
}
