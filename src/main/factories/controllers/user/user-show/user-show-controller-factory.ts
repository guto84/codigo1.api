import { Controller } from '../../../../../presentation/protocols'
import { UserRepository } from '../../../../../infra/db/mysql'
import { DbUserFindById } from '../../../../../data/usecases/db'
import { UserShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeUserShowController = (): Controller => {
  const userRepository = new UserRepository()
  const dbUserFindById = new DbUserFindById(userRepository)
  const controller = new UserShowController(dbUserFindById)
  return makeLogControllerDecorator(controller)
}
