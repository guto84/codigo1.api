import { Controller } from '../../../../../presentation/protocols'
import { ClientRepository } from '../../../../../infra/db/mysql'
import { DbClientUpdate } from '../../../../../data/usecases/db'
import { ClientUpdateController } from '../../../../../presentation/controllers'
import { makeClientUpdateValidation } from './client-update-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeClientUpdateController = (): Controller => {
  const clientRepository = new ClientRepository()
  const dbClientUpdate = new DbClientUpdate(clientRepository)
  const controller = new ClientUpdateController(dbClientUpdate, makeClientUpdateValidation())
  return makeLogControllerDecorator(controller)
}
