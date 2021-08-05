import { Controller } from '../../../../../presentation/protocols'
import { ContactRepository } from '../../../../../infra/db/mysql'
import { DbContactFindAllByClientId } from '../../../../../data/usecases/db'
import { ContactListController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'
import {makeContactListValidation} from './contact-list-validation-factory'

export const makeContactListController = (): Controller => {
  const contactRepository = new ContactRepository()
  const dbContactFindAllByClientId = new DbContactFindAllByClientId(contactRepository)
  const controller = new ContactListController(dbContactFindAllByClientId, makeContactListValidation())
  return makeLogControllerDecorator(controller)
}
