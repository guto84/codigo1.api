import { UserStoreRepository, UserFindByEmailRepository, CriptographyHash } from '../../../protocols'

export class DbUserStore implements UserStoreRepository {
  constructor(
    private readonly storeRepository: UserStoreRepository,
    private readonly findByEmailRepository: UserFindByEmailRepository,
    private readonly criptography: CriptographyHash
  ) {
    this.storeRepository = storeRepository
    this.findByEmailRepository = findByEmailRepository
    this.criptography = criptography
  }

  async store(values: UserStoreRepository.Params): Promise<UserStoreRepository.Result> {
    const { name, email, password } = values
    const user = await this.findByEmailRepository.findByEmail(email)
    if (!user) {
      const data = { name, email, password: await this.criptography.hash(password) }
      return await this.storeRepository.store(data)
    }
    return null
  }
}
