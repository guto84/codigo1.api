import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'
import { ProposalLinkStore } from '../../../domain/usecases'
import { badRequest, serverError, created } from '../../helpers/http/http-helper'

export class ProposalLinkStoreController implements Controller {
  constructor(private readonly model: ProposalLinkStore, private readonly validation: Validation) {
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
      const response = await this.model.store(body)
      return created(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
