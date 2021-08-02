import {
  UserAuthRepository,
  UserFindByEmailRepository,
  UserUpdateTokenRepository,
  CriptographyCompare,
  TokenEncrypt
} from '../../../protocols'

export class DbUserLogin implements UserAuthRepository {
  constructor(
    private readonly findByEmailRepository: UserFindByEmailRepository,
    private readonly updateAccessTokenRepository: UserUpdateTokenRepository,
    private readonly criptography: CriptographyCompare,
    private readonly token: TokenEncrypt
  ) {
    this.findByEmailRepository = findByEmailRepository
    this.updateAccessTokenRepository = updateAccessTokenRepository
    this.criptography = criptography
    this.token = token
  }

  async auth(values: UserAuthRepository.Params): Promise<UserAuthRepository.Result> {
    const { email, password } = values
    const user = await this.findByEmailRepository.findByEmail(email)
    if (user) {
      const isValid = await this.criptography.compare(password, user.password)
      if (isValid) {
        const { id, name, email } = user
        const token = await this.token.encrypt({ id, name, email })
        const teste = await this.updateAccessTokenRepository.updateToken({ id, token })
        return { token }
      }
    }
    return null
  }
}