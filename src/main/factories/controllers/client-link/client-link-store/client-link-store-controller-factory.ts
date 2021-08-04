import { Controller } from '../../../../../presentation/protocols'
import { ClientLinkRepository } from '../../../../../infra/db/mysql'
import { DbClientLinkStore } from '../../../../../data/usecases/db'
import { ClientLinkStoreController } from '../../../../../presentation/controllers'
import { makeClientLinkStoreValidation } from './client-link-store-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientLinkStoreController = (): Controller => {
  const clientLinkRepository = new ClientLinkRepository()
  const dbClientLinkStore = new DbClientLinkStore(clientLinkRepository)
  const controller = new ClientLinkStoreController(dbClientLinkStore, makeClientLinkStoreValidation())
  return makeLogControllerDecorator(controller)
}
