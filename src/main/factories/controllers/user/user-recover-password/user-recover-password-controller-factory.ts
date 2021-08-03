import env from '../../../../config/env'
import { Controller } from '../../../../../presentation/protocols'
import { UserRecoverPasswordController } from '../../../../../presentation/controllers/user'
import { makeLogControllerDecorator } from '../../../decorators'
import { makeUserRecoverPasswordValidation } from './user-recover-password-validation-factory'
import { DbUserRecoverPassword } from '../../../../../data/usecases/db/user'
import { UserRepository, PasswordResetRepository } from '../../../../../infra/db/mysql'
import { CriptographyAdapter } from '../../../../../infra/adapters'

export const makeUserRecoverPasswordController = (): Controller => {
  const userRepository = new UserRepository()
  const passwordResetRepository = new PasswordResetRepository()
  const criptographyAdapter = new CriptographyAdapter(env.salt)
  const dbUserRecoverPassword = new DbUserRecoverPassword(userRepository, passwordResetRepository, criptographyAdapter)
  const controller = new UserRecoverPasswordController(dbUserRecoverPassword, makeUserRecoverPasswordValidation())
  return makeLogControllerDecorator(controller)
}
