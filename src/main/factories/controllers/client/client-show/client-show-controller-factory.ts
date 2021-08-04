import { Controller } from '../../../../../presentation/protocols'
import { ClientRepository } from '../../../../../infra/db/mysql'
import { DbClientFindById } from '../../../../../data/usecases/db'
import { ClientShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientShowController = (): Controller => {
  const clientRepository = new ClientRepository()
  const dbClientFindById = new DbClientFindById(clientRepository)
  const controller = new ClientShowController(dbClientFindById)
  return makeLogControllerDecorator(controller)
}
