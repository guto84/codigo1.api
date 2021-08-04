import { Controller } from '../../../../../presentation/protocols'
import { ClientLinkRepository } from '../../../../../infra/db/mysql'
import { DbClientLinkFindById } from '../../../../../data/usecases/db'
import { ClientLinkShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientLinkShowController = (): Controller => {
  const clientLinkRepository = new ClientLinkRepository()
  const dbClientLinkFindById = new DbClientLinkFindById(clientLinkRepository)
  const controller = new ClientLinkShowController(dbClientLinkFindById)
  return makeLogControllerDecorator(controller)
}
