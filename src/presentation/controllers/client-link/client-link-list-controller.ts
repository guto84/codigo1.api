import { ClientLinkFindAllByClientId } from '../../../domain/usecases'
import { badRequest, ok, serverError } from '../../helpers/http'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class ClientLinkListController implements Controller {
  constructor(private readonly model: ClientLinkFindAllByClientId, private readonly validation: Validation) {
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
      const data = await this.model.findAllByClientId(body.client_id)
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
