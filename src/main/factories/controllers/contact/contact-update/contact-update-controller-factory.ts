import { Controller } from '../../../../../presentation/protocols'
import { ContactRepository } from '../../../../../infra/db/mysql'
import { DbContactUpdate } from '../../../../../data/usecases/db'
import { ContactUpdateController } from '../../../../../presentation/controllers'
import { makeContactUpdateValidation } from './contact-update-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeContactUpdateController = (): Controller => {
  const contactRepository = new ContactRepository()
  const dbContactUpdate = new DbContactUpdate(contactRepository)
  const controller = new ContactUpdateController(dbContactUpdate, makeContactUpdateValidation())
  return makeLogControllerDecorator(controller)
}
