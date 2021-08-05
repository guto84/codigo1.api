import { Controller } from '../../../../../presentation/protocols'
import { ContactRepository } from '../../../../../infra/db/mysql'
import { DbContactFindById } from '../../../../../data/usecases/db'
import { ContactShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeContactShowController = (): Controller => {
  const contactRepository = new ContactRepository()
  const dbContactFindById = new DbContactFindById(contactRepository)
  const controller = new ContactShowController(dbContactFindById)
  return makeLogControllerDecorator(controller)
}
