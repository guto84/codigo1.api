import { Controller } from '../../../../../presentation/protocols'
import { ProposalRepository } from '../../../../../infra/db/mysql'
import { DbDelete } from '../../../../../data/usecases/db'
import { DeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalDeleteController = (): Controller => {
  const proposalRepository = new ProposalRepository()
  const dbDelete = new DbDelete(proposalRepository)
  const controller = new DeleteController(dbDelete)
  return makeLogControllerDecorator(controller)
}
