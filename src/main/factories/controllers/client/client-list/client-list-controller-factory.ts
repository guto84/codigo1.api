import { Controller } from '../../../../../presentation/protocols'
import { ClientRepository } from '../../../../../infra/db/mysql'
import { DbFindAll } from '../../../../../data/usecases/db'
import { ListController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientListController = (): Controller => {
  const clientRepository = new ClientRepository()
  const dbFindAll = new DbFindAll(clientRepository)
  const controller = new ListController(dbFindAll)
  return makeLogControllerDecorator(controller)
}
