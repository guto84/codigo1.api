import { Controller } from '../../../../../presentation/protocols'
import { UserRepository } from '../../../../../infra/db/mysql'
import { DbFindAll } from '../../../../../data/usecases/db'
import { ListController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeUserListController = (): Controller => {
  const userRepository = new UserRepository()
  const dbFindAll = new DbFindAll(userRepository)
  const controller = new ListController(dbFindAll)
  return makeLogControllerDecorator(controller)
}
