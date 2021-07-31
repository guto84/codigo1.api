import { LogStore } from '../../domain/usecases/log'
import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

export class LogControllerDecorator implements Controller {
  constructor(private readonly controller: Controller, private readonly repository: LogStore) {
    this.controller = controller
    this.repository = repository
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse.statusCode === 500) {
      this.repository.store({ error: httpResponse.body.stack })
    }
    return httpResponse
  }
}