import { Controller } from '../../../../../presentation/protocols'
import { UserRepository } from '../../../../../infra/db/mysql'
import { DbUserDelete } from '../../../../../data/usecases/db'
import { UserDeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeUserDeleteController = (): Controller => {
  const userRepository = new UserRepository()
  const dbUserDelete = new DbUserDelete(userRepository)
  const controller = new UserDeleteController(dbUserDelete)
  return makeLogControllerDecorator(controller)
}
