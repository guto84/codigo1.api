import { Controller } from '../../../../../presentation/protocols'
import { UserRepository } from '../../../../../infra/db/mysql'
import { DbFindById } from '../../../../../data/usecases/db'
import { ShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeUserShowController = (): Controller => {
  const userRepository = new UserRepository()
  const dbFindById = new DbFindById(userRepository)
  const controller = new ShowController(dbFindById)
  return makeLogControllerDecorator(controller)
}
