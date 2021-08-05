import { Controller } from '../../../../../presentation/protocols'
import { ProposalRepository } from '../../../../../infra/db/mysql'
import { DbProposalFindById } from '../../../../../data/usecases/db'
import { ProposalShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalShowController = (): Controller => {
  const proposalRepository = new ProposalRepository()
  const dbProposalFindById = new DbProposalFindById(proposalRepository)
  const controller = new ProposalShowController(dbProposalFindById)
  return makeLogControllerDecorator(controller)
}
