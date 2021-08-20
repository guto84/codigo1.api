import { FindAllByTenantId } from '../../domain/usecases'
import { badRequest, ok, serverError } from '../helpers/http'
import { Controller, HttpRequest, HttpResponse, Validation } from '../protocols'

export class ListTenantIdController implements Controller {
  constructor(
    private readonly tenantId: string,
    private readonly model: FindAllByTenantId,
    private readonly validation: Validation
    ) {
    this.tenantId = tenantId
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
      const data = await this.model.findAllByTenantId(body[this.tenantId])
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
