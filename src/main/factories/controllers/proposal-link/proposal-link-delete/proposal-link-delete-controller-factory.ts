import { Controller } from '../../../../../presentation/protocols'
import { ProposalLinkRepository } from '../../../../../infra/db/mysql'
import { DbDelete } from '../../../../../data/usecases/db'
import { DeleteController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'

export const makeProposalLinkDeleteController = (): Controller => {
  const proposalLinkRepository = new ProposalLinkRepository()
  const dbDelete = new DbDelete(proposalLinkRepository)
  const controller = new DeleteController(dbDelete)
  return makeLogControllerDecorator(controller)
}
