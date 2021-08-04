import { Controller } from '../../../../../presentation/protocols'
import { UserForgotPasswordController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'
import { DbUserForgotPassword } from '../../../../../data/usecases/db'
import { makeUserForgotPasswordValidation } from './user-forgot-password-validation-factory'
import { UserRepository, PasswordResetRepository } from '../../../../../infra/db/mysql'
import { UuidAdapter } from '../../../../../infra/adapters'

export const makeUserForgotPasswordController = (): Controller => {
  const userRepository = new UserRepository()
  const passwordResetRepository = new PasswordResetRepository()
  const uuidAdapter = new UuidAdapter()
  const dbUserForgotPassword = new DbUserForgotPassword(userRepository, passwordResetRepository, uuidAdapter)
  const controller = new UserForgotPasswordController(dbUserForgotPassword, makeUserForgotPasswordValidation())
  return makeLogControllerDecorator(controller)
}
