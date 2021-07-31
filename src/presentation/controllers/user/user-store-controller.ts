import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'
import { UserStore } from '../../../domain/usecases/user'
import { badRequest, serverError, ok, forbidden } from '../../helpers/http/http-helper'
import { EmailInUseError } from '../../errors'

export class UserStoreController implements Controller {
  constructor(private readonly repository: UserStore, private readonly validation: Validation) {
    this.repository = repository
    this.validation = validation
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body } = httpRequest
      const error = this.validation.validate(body)
      if (error) {
        return badRequest(error)
      }
      const response = await this.repository.store(body)
      if (!response) {
        return forbidden(new EmailInUseError())
      }
      return ok(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
