import { Controller } from '../../../../../presentation/protocols'
import { UserRepository } from '../../../../../infra/db/mysql'
import { DbUserUpdate } from '../../../../../data/usecases/db'
import { UserUpdateController } from '../../../../../presentation/controllers'
import { makeUserUpdateValidation } from './user-update-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeUserUpdateController = (): Controller => {
  const userRepository = new UserRepository()
  const dbUserUpdate = new DbUserUpdate(userRepository, userRepository)
  const controller = new UserUpdateController(dbUserUpdate, makeUserUpdateValidation())
  return makeLogControllerDecorator(controller)
}
