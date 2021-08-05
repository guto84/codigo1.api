import { Controller } from '../../../../../presentation/protocols'
import { ContactRepository } from '../../../../../infra/db/mysql'
import { DbContactStore } from '../../../../../data/usecases/db'
import { ContactStoreController } from '../../../../../presentation/controllers'
import { makeContactStoreValidation } from './contact-store-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeContactStoreController = (): Controller => {
  const contactRepository = new ContactRepository()
  const dbContactStore = new DbContactStore(contactRepository)
  const controller = new ContactStoreController(dbContactStore, makeContactStoreValidation())
  return makeLogControllerDecorator(controller)
}
