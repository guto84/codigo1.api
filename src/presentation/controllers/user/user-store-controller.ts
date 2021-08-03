import { Controller, HttpRequest, HttpResponse, Validation } from '../../protocols'
import { UserStore } from '../../../domain/usecases'
import { badRequest, serverError, created, forbidden } from '../../helpers/http/http-helper'
import { EmailInUseError } from '../../errors'

export class UserStoreController implements Controller {
  constructor(private readonly model: UserStore, private readonly validation: Validation) {
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
      const response = await this.model.store(body)
      if (!response) {
        return forbidden(new EmailInUseError())
      }
      return created(response)
    } catch (error) {
      return serverError(error)
    }
  }
}
