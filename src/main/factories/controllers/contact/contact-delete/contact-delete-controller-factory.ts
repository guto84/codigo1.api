import { Controller } from '../../../../../presentation/protocols'
import { ContactRepository } from '../../../../../infra/db/mysql'
import { DbContactDelete } from '../../../../../data/usecases/db'
import { ContactDeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeContactDeleteController = (): Controller => {
  const contactRepository = new ContactRepository()
  const dbContactDelete = new DbContactDelete(contactRepository)
  const controller = new ContactDeleteController(dbContactDelete)
  return makeLogControllerDecorator(controller)
}
