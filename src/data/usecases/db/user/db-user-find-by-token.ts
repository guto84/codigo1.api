import { UserFindByToken } from '../../../../domain/usecases'
import { TokenDecrypt, UserFindByTokenRepository } from '../../../protocols'

export class DbUserFindByToken implements UserFindByToken {
  constructor(private readonly repository: UserFindByTokenRepository, private readonly decrypter: TokenDecrypt) {
    this.repository = repository
    this.decrypter = decrypter
  }

  async findByToken(accessToken: UserFindByToken.Params): Promise<UserFindByToken.Result> {
    try {
      const token = await this.decrypter.decrypt(accessToken)
      if (token) {
        const user = await this.repository.findByToken(accessToken)
        if (user) {
          return user
        }
      }
      return null
    } catch (error) {
      return null
    }
  }
}
