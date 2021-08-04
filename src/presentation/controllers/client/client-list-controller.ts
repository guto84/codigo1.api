import { ClientFindAll } from '../../../domain/usecases'
import { ok, serverError } from '../../helpers/http'
import { Controller, HttpResponse } from '../../protocols'

export class ClientListController implements Controller {
  constructor(private readonly model: ClientFindAll) {
    this.model = model
  }
  async handle(): Promise<HttpResponse> {
    try {
      const data = await this.model.findAll()
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}
