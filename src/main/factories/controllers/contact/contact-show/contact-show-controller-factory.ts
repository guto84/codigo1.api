import { Controller } from '../../../../../presentation/protocols'
import { ContactRepository } from '../../../../../infra/db/mysql'
import { DbFindById } from '../../../../../data/usecases/db'
import { ShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeContactShowController = (): Controller => {
  const contactRepository = new ContactRepository()
  const dbFindById = new DbFindById(contactRepository)
  const controller = new ShowController(dbFindById)
  return makeLogControllerDecorator(controller)
}
