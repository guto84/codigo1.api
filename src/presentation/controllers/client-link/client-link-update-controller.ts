import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'
import { ClientLinkUpdate } from '../../../domain/usecases'
import { badRequest, serverError, noContent } from '../../helpers/http/http-helper'

export class ClientLinkUpdateController implements Controller {
  constructor(private readonly model: ClientLinkUpdate, private readonly validation: Validation) {
    this.model = model
    this.validation = validation
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body, params } = httpRequest
      const { id } = params
      const error = this.validation.validate(body)
      if (error) {
        return badRequest(error)
      }
      await this.model.update(id, body)
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
