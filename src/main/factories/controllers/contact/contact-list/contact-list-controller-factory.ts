import { Controller } from '../../../../../presentation/protocols'
import { ContactRepository } from '../../../../../infra/db/mysql'
import { DbFindAllByTenantId } from '../../../../../data/usecases/db'
import { ListTenantIdController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'
import {makeContactListValidation} from './contact-list-validation-factory'

export const makeContactListController = (): Controller => {
  const contactRepository = new ContactRepository()
  const dbFindAllByTenantId = new DbFindAllByTenantId(contactRepository)
  const controller = new ListTenantIdController('client_id', dbFindAllByTenantId, makeContactListValidation())
  return makeLogControllerDecorator(controller)
}
