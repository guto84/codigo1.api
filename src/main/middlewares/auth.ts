import { adaptMiddleware } from '../adapters'
import { makeAuthUserMiddleware } from '../factories/middlewares'

export const auth = adaptMiddleware(makeAuthUserMiddleware())
