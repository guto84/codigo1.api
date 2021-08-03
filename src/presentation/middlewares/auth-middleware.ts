import { Middleware, HttpResponse } from '../protocols'
import { forbidden, ok, serverError } from '../helpers/http'
import { AccessDeniedError } from '../errors'
import { UserFindByToken } from '../../domain/usecases'
import { TokenDecrypt } from '../../data/protocols'

export class AuthMiddleware implements Middleware {
  constructor(private readonly model: UserFindByToken, private readonly token: TokenDecrypt) {
    this.model = model
    this.token = token
  }

  async handle(request: AuthMiddleware.Request): Promise<HttpResponse>  {
    try {
      const { accessToken } = request
      if (accessToken) {
        const data = await this.model.findByToken(accessToken)
        if (data) {
          return ok(await this.token.decrypt(accessToken))
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}
