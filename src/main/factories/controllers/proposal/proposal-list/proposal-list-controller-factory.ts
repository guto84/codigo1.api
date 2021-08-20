import { Controller } from '../../../../../presentation/protocols'
import { ProposalRepository } from '../../../../../infra/db/mysql'
import { DbFindAll } from '../../../../../data/usecases/db'
import { ListController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalListController = (): Controller => {
  const proposalRepository = new ProposalRepository()
  const dbFindAll = new DbFindAll(proposalRepository)
  const controller = new ListController(dbFindAll)
  return makeLogControllerDecorator(controller)
}
