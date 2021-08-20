import { Controller } from '../../../../../presentation/protocols'
import { ProposalLinkRepository } from '../../../../../infra/db/mysql'
import { DbFindById } from '../../../../../data/usecases/db'
import { ShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalLinkShowController = (): Controller => {
  const proposalLinkRepository = new ProposalLinkRepository()
  const dbFindById = new DbFindById(proposalLinkRepository)
  const controller = new ShowController(dbFindById)
  return makeLogControllerDecorator(controller)
}
