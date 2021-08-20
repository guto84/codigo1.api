import { Controller } from '../../../../../presentation/protocols'
import { UserRepository } from '../../../../../infra/db/mysql'
import { DbDelete } from '../../../../../data/usecases/db'
import { DeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeUserDeleteController = (): Controller => {
  const userRepository = new UserRepository()
  const dbDelete = new DbDelete(userRepository)
  const controller = new DeleteController(dbDelete)
  return makeLogControllerDecorator(controller)
}
