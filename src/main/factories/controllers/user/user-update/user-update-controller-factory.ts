import env from '../../../../config/env'
import { Controller } from '../../../../../presentation/protocols'
import { UserRepository } from '../../../../../infra/db/mysql'
import { DbUserUpdate } from '../../../../../data/usecases/db/user'
import { UserUpdateController } from '../../../../../presentation/controllers/user'
import { makeUserUpdateValidation } from './user-update-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeUserUpdateController = (): Controller => {
  const userRepository = new UserRepository()
  const dbUserUpdate = new DbUserUpdate(userRepository, userRepository)
  const controller = new UserUpdateController(dbUserUpdate, makeUserUpdateValidation())
  return makeLogControllerDecorator(controller)
}
