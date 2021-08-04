import { Controller } from '../../../../../presentation/protocols'
import { ClientRepository } from '../../../../../infra/db/mysql'
import { DbClientStore } from '../../../../../data/usecases/db'
import { ClientStoreController } from '../../../../../presentation/controllers'
import { makeClientStoreValidation } from './client-store-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientStoreController = (): Controller => {
  const clientRepository = new ClientRepository()
  const dbClientStore = new DbClientStore(clientRepository)
  const controller = new ClientStoreController(dbClientStore, makeClientStoreValidation())
  return makeLogControllerDecorator(controller)
}
