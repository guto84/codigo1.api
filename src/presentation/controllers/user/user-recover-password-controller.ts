import { serverError, noContent, badRequest, forbidden } from '../../helpers/http'
import { InvalidParamError } from '../../errors'
import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'

export class UserRecoverPasswordController implements Controller {
  constructor(private readonly model, private readonly validation: Validation) {
    this.model = model
    this.validation = validation
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { body } = httpRequest
    const { uuid, password } = body
    const values = { uuid, password }
    try {
      const error = this.validation.validate(body)
      if (error) {
        return badRequest(error)
      }
      const data = await this.model.recoverPassword(values)
      if (!data) {
        return forbidden(new InvalidParamError('uuid'))
      }
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
