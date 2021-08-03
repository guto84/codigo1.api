import { serverError, ok, badRequest, forbidden } from '../../helpers/http'
import { UserForgotPassword } from '../../../domain/usecases'
import { NotFoundError } from '../../errors'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class UserForgotPasswordController implements Controller {
  constructor(
    private readonly model: UserForgotPassword,
    private readonly validation: Validation
  ) {
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
      const data = await this.model.forgotPassword(body.email)
      if (!data) {
        return forbidden(new NotFoundError())
      }
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
