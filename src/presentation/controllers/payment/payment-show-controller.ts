import { DbPaymentFindById } from '../../../data/usecases/db'
import { ok, serverError } from '../../helpers/http'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class PaymentShowController implements Controller {
  constructor(private readonly model: DbPaymentFindById) {
    this.model = model
  }
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const data = await this.model.findById(httpRequest.params.id)
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}