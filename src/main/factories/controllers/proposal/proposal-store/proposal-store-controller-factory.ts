import { Controller } from '../../../../../presentation/protocols'
import { ProposalRepository } from '../../../../../infra/db/mysql'
import { DbProposalStore } from '../../../../../data/usecases/db'
import { ProposalStoreController } from '../../../../../presentation/controllers'
import { makeProposalStoreValidation } from './proposal-store-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalStoreController = (): Controller => {
  const proposalRepository = new ProposalRepository()
  const dbProposalStore = new DbProposalStore(proposalRepository)
  const controller = new ProposalStoreController(dbProposalStore, makeProposalStoreValidation())
  return makeLogControllerDecorator(controller)
}
