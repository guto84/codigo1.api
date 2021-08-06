import { Controller } from '../../../../../presentation/protocols'
import { UserUploadController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'
import { DbUserUpload } from '../../../../../data/usecases/db'
import { UserRepository } from '../../../../../infra/db/mysql'
import { UtilAdapter } from '../../../../../infra/adapters'

export const makeUserUploadController = (): Controller => {
  const userRepository = new UserRepository()
  const utilAdapter = new UtilAdapter()
  const dbUserUpload = new DbUserUpload(userRepository, userRepository, utilAdapter)
  const controller = new UserUploadController(dbUserUpload)
  return makeLogControllerDecorator(controller)
}
