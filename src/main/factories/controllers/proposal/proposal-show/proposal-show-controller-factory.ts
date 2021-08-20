import { Controller } from '../../../../../presentation/protocols'
import { ProposalRepository } from '../../../../../infra/db/mysql'
import { DbFindById } from '../../../../../data/usecases/db'
import { ShowController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalShowController = (): Controller => {
  const proposalRepository = new ProposalRepository()
  const dbFindById = new DbFindById(proposalRepository)
  const controller = new ShowController(dbFindById)
  return makeLogControllerDecorator(controller)
}
