import { Controller } from '../../../../../presentation/protocols'
import { ClientLinkRepository } from '../../../../../infra/db/mysql'
import { DbFindById } from '../../../../../data/usecases/db'
import { ShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientLinkShowController = (): Controller => {
  const clientLinkRepository = new ClientLinkRepository()
  const dbFindById = new DbFindById(clientLinkRepository)
  const controller = new ShowController(dbFindById)
  return makeLogControllerDecorator(controller)
}
