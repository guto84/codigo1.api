import { Controller } from '../../../../../presentation/protocols'
import { ProposalRepository } from '../../../../../infra/db/mysql'
import { DbProposalDelete } from '../../../../../data/usecases/db'
import { ProposalDeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalDeleteController = (): Controller => {
  const proposalRepository = new ProposalRepository()
  const dbProposalDelete = new DbProposalDelete(proposalRepository)
  const controller = new ProposalDeleteController(dbProposalDelete)
  return makeLogControllerDecorator(controller)
}
