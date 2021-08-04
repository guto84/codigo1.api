import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'
import { UserUpdate } from '../../../domain/usecases'
import { badRequest, serverError, noContent, forbidden } from '../../helpers/http/http-helper'
import { EmailInUseError } from '../../errors'

export class UserUpdateController implements Controller {
  constructor(private readonly model: UserUpdate, private readonly validation: Validation) {
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
      const response = await this.model.update(id, body)
      if (!response) {
        return forbidden(new EmailInUseError())
      }
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
