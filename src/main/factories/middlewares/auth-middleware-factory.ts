import env from '../../config/env'
import { DbUserFindByToken } from '../../../data/usecases/db/user'
import { UserRepository } from '../../../infra/db/mysql'
import { TokenAdapter } from '../../../infra/adapters'
import { AuthMiddleware } from '../../../presentation/middlewares'

export const makeAuthUserMiddleware = () => {
  const tokenAdapter = new TokenAdapter(env.tokenSecret)
  const userRepository = new UserRepository()
  const dbUserFindByToken = new DbUserFindByToken(userRepository, tokenAdapter)
  return new AuthMiddleware(dbUserFindByToken, tokenAdapter)
}
