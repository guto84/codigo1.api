import { Controller } from '../../../../../presentation/protocols'
import { ProposalLinkRepository } from '../../../../../infra/db/mysql'
import { DbProposalLinkFindById } from '../../../../../data/usecases/db'
import { ProposalLinkShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalLinkShowController = (): Controller => {
  const proposalLinkRepository = new ProposalLinkRepository()
  const dbProposalLinkFindById = new DbProposalLinkFindById(proposalLinkRepository)
  const controller = new ProposalLinkShowController(dbProposalLinkFindById)
  return makeLogControllerDecorator(controller)
}
