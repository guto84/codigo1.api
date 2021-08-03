import { LogStore } from '../../domain/usecases'
import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

export class LogControllerDecorator implements Controller {
  constructor(private readonly controller: Controller, private readonly model: LogStore) {
    this.controller = controller
    this.model = model
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      this.model.store({ error: httpResponse.body.stack })
    }
    return httpResponse
  }
}
