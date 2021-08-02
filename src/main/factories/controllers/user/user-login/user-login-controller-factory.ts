import env from '../../../../config/env'
import { Controller } from '../../../../../presentation/protocols'
import { CriptographyAdapter, TokenAdapter } from '../../../../../infra/adapters'
import { UserRepository } from '../../../../../infra/db/mysql'
import { DbUserLogin } from '../../../../../data/usecases/db/user'
import { UserLoginController } from '../../../../../presentation/controllers/user'
import { makeLogControllerDecorator } from '../../../decorators'
import { makeUserLoginValidation } from './user-login-validation-factory'

export const makeUserLoginController = (): Controller => {
  const criptographyAdapter = new CriptographyAdapter(env.salt)
  const tokenAdapter = new TokenAdapter(env.tokenSecret)
  const userRepository = new UserRepository()
  const dbUserLogin = new DbUserLogin(userRepository, userRepository, criptographyAdapter, tokenAdapter)
  const controller = new UserLoginController(dbUserLogin, makeUserLoginValidation())
  return makeLogControllerDecorator(controller)
}
