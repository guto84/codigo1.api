import { Controller } from '../../../../../presentation/protocols'
import { ProposalRepository } from '../../../../../infra/db/mysql'
import { DbProposalUpdate } from '../../../../../data/usecases/db'
import { ProposalUpdateController } from '../../../../../presentation/controllers'
import { makeProposalUpdateValidation } from './proposal-update-validation-factory'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalUpdateController = (): Controller => {
  const proposalRepository = new ProposalRepository()
  const dbProposalUpdate = new DbProposalUpdate(proposalRepository)
  const controller = new ProposalUpdateController(dbProposalUpdate, makeProposalUpdateValidation())
  return makeLogControllerDecorator(controller)
}
