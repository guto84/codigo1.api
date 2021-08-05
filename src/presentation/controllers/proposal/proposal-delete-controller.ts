import { ProposalDelete } from '../../../domain/usecases'
import { noContent, serverError } from '../../helpers/http'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class ProposalDeleteController implements Controller {
  constructor(private readonly model: ProposalDelete) {
    this.model = model
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      await this.model.delete(httpRequest.params.id)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
