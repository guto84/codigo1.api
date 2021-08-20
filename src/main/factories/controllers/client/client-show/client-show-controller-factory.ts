import { Controller } from '../../../../../presentation/protocols'
import { ClientRepository } from '../../../../../infra/db/mysql'
import { DbFindById } from '../../../../../data/usecases/db'
import { ShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientShowController = (): Controller => {
  const clientRepository = new ClientRepository()
  const dbFindById = new DbFindById(clientRepository)
  const controller = new ShowController(dbFindById)
  return makeLogControllerDecorator(controller)
}
