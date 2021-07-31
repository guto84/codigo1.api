import { LogRepository } from '../../../infra/db/mysql/log-repository'
import { Controller } from '../../../presentation/protocols'
import { LogControllerDecorator } from '../../decorators'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logRepository = new LogRepository()
  return new LogControllerDecorator(controller, logRepository)
}
