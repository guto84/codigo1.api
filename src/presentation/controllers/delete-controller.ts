import { noContent, serverError } from '../helpers/http'
import { Controller, HttpRequest, HttpResponse } from '../protocols'

interface Delete {
  delete(id: number): Promise<number>
}

export class DeleteController implements Controller {
  constructor(private readonly model: Delete) {
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
