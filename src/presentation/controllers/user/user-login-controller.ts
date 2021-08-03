import { UserLogin } from '../../../domain/usecases'
import { badRequest, unauthorizedError, ok, serverError } from '../../helpers/http'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class UserLoginController implements Controller {
  constructor(private readonly model: UserLogin, private readonly validation: Validation) {
    this.model = model
    this.validation = validation
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest
    try {
      const error = this.validation.validate(body)
      if (error) {
        return badRequest(error)
      }
      const data = await this.model.login(body)
      if (!data) {
        return unauthorizedError()
      }
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
