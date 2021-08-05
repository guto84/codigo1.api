import { Controller } from '../../../../../presentation/protocols'
import { ProposalLinkRepository } from '../../../../../infra/db/mysql'
import { DbProposalLinkUpdate } from '../../../../../data/usecases/db'
import { ProposalLinkUpdateController } from '../../../../../presentation/controllers'
import { makeProposalLinkUpdateValidation } from './proposal-link-update-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalLinkUpdateController = (): Controller => {
  const proposalLinkRepository = new ProposalLinkRepository()
  const dbProposalLinkUpdate = new DbProposalLinkUpdate(proposalLinkRepository)
  const controller = new ProposalLinkUpdateController(dbProposalLinkUpdate, makeProposalLinkUpdateValidation())
  return makeLogControllerDecorator(controller)
}
