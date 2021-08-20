import { Controller } from '../../../../../presentation/protocols'
import { ProposalLinkRepository } from '../../../../../infra/db/mysql'
import { DbFindAllByTenantId } from '../../../../../data/usecases/db'
import { ListTenantIdController } from '../../../../../presentation/controllers'
import { makeLogControllerDecorator } from '../../../decorators'
import { makeProposalLinkListValidation } from './proposal-link-list-validation-factory'

export const makeProposalLinkListController = (): Controller => {
  const proposalLinkRepository = new ProposalLinkRepository()
  const dbFindAllByTenantId = new DbFindAllByTenantId(proposalLinkRepository)
  const controller = new ListTenantIdController('proposal_id', dbFindAllByTenantId, makeProposalLinkListValidation())
  return makeLogControllerDecorator(controller)
}
