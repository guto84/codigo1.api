import { UserAuth } from '../../../domain/usecases'
import { badRequest, unauthorizedError, ok, serverError } from '../../helpers/http'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class UserLoginController implements Controller {
  constructor(private readonly repository: UserAuth, private readonly validation: Validation) {
    this.repository = repository
    this.validation = validation
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest
    try {
      const error = this.validation.validate(body)
      if (error) {
        return badRequest(error)
      }
      const data = await this.repository.auth(body)
      if (!data) {
        return unauthorizedError()
      }
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
