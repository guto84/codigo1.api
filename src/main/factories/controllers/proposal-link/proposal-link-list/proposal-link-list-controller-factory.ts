import { Controller } from '../../../../../presentation/protocols'
import { ProposalLinkRepository } from '../../../../../infra/db/mysql'
import { DbProposalLinkFindAllByProposalId } from '../../../../../data/usecases/db'
import { ProposalLinkListController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'
import {makeProposalLinkListValidation} from './proposal-link-list-validation-factory'

export const makeProposalLinkListController = (): Controller => {
  const proposalLinkRepository = new ProposalLinkRepository()
  const dbProposalLinkFindAllByProposalId = new DbProposalLinkFindAllByProposalId(proposalLinkRepository)
  const controller = new ProposalLinkListController(dbProposalLinkFindAllByProposalId, makeProposalLinkListValidation())
  return makeLogControllerDecorator(controller)
}
