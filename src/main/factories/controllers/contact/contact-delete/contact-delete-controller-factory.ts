import { Controller } from '../../../../../presentation/protocols'
import { ContactRepository } from '../../../../../infra/db/mysql'
import { DbDelete } from '../../../../../data/usecases/db'
import { DeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeContactDeleteController = (): Controller => {
  const contactRepository = new ContactRepository()
  const dbDelete = new DbDelete(contactRepository)
  const controller = new DeleteController(dbDelete)
  return makeLogControllerDecorator(controller)
}
