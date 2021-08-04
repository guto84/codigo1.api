import { Controller } from '../../../../../presentation/protocols'
import { ClientRepository } from '../../../../../infra/db/mysql'
import { DbClientFindAll } from '../../../../../data/usecases/db'
import { ClientListController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientListController = (): Controller => {
  const clientRepository = new ClientRepository()
  const dbClientFindAll = new DbClientFindAll(clientRepository)
  const controller = new ClientListController(dbClientFindAll)
  return makeLogControllerDecorator(controller)
}
