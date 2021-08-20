import { Controller } from '../../../../../presentation/protocols'
import { ClientRepository } from '../../../../../infra/db/mysql'
import { DbDelete } from '../../../../../data/usecases/db/db-delete'
import { DeleteController } from '../../../../../presentation/controllers/delete-controller'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientDeleteController = (): Controller => {
  const clientRepository = new ClientRepository()
  const dbDelete = new DbDelete(clientRepository)
  const controller = new DeleteController(dbDelete)
  return makeLogControllerDecorator(controller)
}
