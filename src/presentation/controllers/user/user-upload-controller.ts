import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { serverError, noContent } from '../../helpers/http/http-helper'
import { UserUpload } from '../../../domain/usecases'

export class UserUploadController implements Controller {
  constructor(private readonly model: UserUpload) {
    this.model = model
  }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { params, file } = httpRequest
      const { id } = params
      const { key: filename, location: file_url = '' } = file
      
      await this.model.upload(id, { filename, file_url })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
