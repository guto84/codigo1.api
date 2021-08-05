import { Controller } from '../../../../../presentation/protocols'
import { ProposalLinkRepository } from '../../../../../infra/db/mysql'
import { DbProposalLinkStore } from '../../../../../data/usecases/db'
import { ProposalLinkStoreController } from '../../../../../presentation/controllers'
import { makeProposalLinkStoreValidation } from './proposal-link-store-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalLinkStoreController = (): Controller => {
  const proposalLinkRepository = new ProposalLinkRepository()
  const dbProposalLinkStore = new DbProposalLinkStore(proposalLinkRepository)
  const controller = new ProposalLinkStoreController(dbProposalLinkStore, makeProposalLinkStoreValidation())
  return makeLogControllerDecorator(controller)
}
