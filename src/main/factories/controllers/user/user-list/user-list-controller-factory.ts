import { Controller } from '../../../../../presentation/protocols'
import { UserRepository } from '../../../../../infra/db/mysql'
import { DbUserFindAll } from '../../../../../data/usecases/db/user'
import { UserListController } from '../../../../../presentation/controllers/user'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeUserListController = (): Controller => {
  const userRepository = new UserRepository()
  const dbUserFindAll = new DbUserFindAll(userRepository)
  const controller = new UserListController(dbUserFindAll)
  return makeLogControllerDecorator(controller)
}
