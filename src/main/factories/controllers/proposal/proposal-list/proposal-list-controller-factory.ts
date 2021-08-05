import { Controller } from '../../../../../presentation/protocols'
import { ProposalRepository } from '../../../../../infra/db/mysql'
import { DbProposalFindAll } from '../../../../../data/usecases/db'
import { ProposalListController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalListController = (): Controller => {
  const proposalRepository = new ProposalRepository()
  const dbProposalFindAll = new DbProposalFindAll(proposalRepository)
  const controller = new ProposalListController(dbProposalFindAll)
  return makeLogControllerDecorator(controller)
}
