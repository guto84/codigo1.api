import { Controller } from '../../../../../presentation/protocols'
import { ClientLinkRepository } from '../../../../../infra/db/mysql'
import { DbClientLinkFindAllByClientId } from '../../../../../data/usecases/db'
import { ClientLinkListController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'
import {makeClientLinkListValidation} from './client-link-list-validation-factory'

export const makeClientLinkListController = (): Controller => {
  const clientLinkRepository = new ClientLinkRepository()
  const dbClientLinkFindAllByClientId = new DbClientLinkFindAllByClientId(clientLinkRepository)
  const controller = new ClientLinkListController(dbClientLinkFindAllByClientId, makeClientLinkListValidation())
  return makeLogControllerDecorator(controller)
}
