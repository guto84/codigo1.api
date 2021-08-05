import { ProposalLinkFindAllByProposalId } from '../../../domain/usecases'
import { badRequest, ok, serverError } from '../../helpers/http'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class ProposalLinkListController implements Controller {
  constructor(private readonly model: ProposalLinkFindAllByProposalId, private readonly validation: Validation) {
    this.model = model
    this.validation = validation
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest
      const error = this.validation.validate(body)
      if (error) {
        return badRequest(error)
      }
      const data = await this.model.findAllByProposalId(body.proposal_id)
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
