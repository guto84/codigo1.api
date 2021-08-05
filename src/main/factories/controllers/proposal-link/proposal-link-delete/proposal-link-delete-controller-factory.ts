import { Controller } from '../../../../../presentation/protocols'
import { ProposalLinkRepository } from '../../../../../infra/db/mysql'
import { DbProposalLinkDelete } from '../../../../../data/usecases/db'
import { ProposalLinkDeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalLinkDeleteController = (): Controller => {
  const proposalLinkRepository = new ProposalLinkRepository()
  const dbProposalLinkDelete = new DbProposalLinkDelete(proposalLinkRepository)
  const controller = new ProposalLinkDeleteController(dbProposalLinkDelete)
  return makeLogControllerDecorator(controller)
}
