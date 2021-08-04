import env from '../../../../config/env'
import { Controller } from '../../../../../presentation/protocols'
import { CriptographyAdapter } from '../../../../../infra/adapters'
import { UserRepository } from '../../../../../infra/db/mysql'
import { DbUserStore } from '../../../../../data/usecases/db'
import { UserStoreController } from '../../../../../presentation/controllers'
import { makeUserStoreValidation } from './user-store-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeUserStoreController = (): Controller => {
  const criptographyAdapter = new CriptographyAdapter(env.salt)
  const userRepository = new UserRepository()
  const dbUserStore = new DbUserStore(userRepository, userRepository, criptographyAdapter)
  const controller = new UserStoreController(dbUserStore, makeUserStoreValidation())
  return makeLogControllerDecorator(controller)
}
