import { Controller } from '../../../../../presentation/protocols'
import { ClientRepository } from '../../../../../infra/db/mysql'
import { DbClientDelete } from '../../../../../data/usecases/db'
import { UserDeleteController } from '../../../../../presentation/controllers/user'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientDeleteController = (): Controller => {
  const clientRepository = new ClientRepository()
  const dbClientDelete = new DbClientDelete(clientRepository)
  const controller = new UserDeleteController(dbClientDelete)
  return makeLogControllerDecorator(controller)
}
