import { UserStore } from '../../../../domain/usecases'
import { UserStoreRepository, UserFindByEmailRepository, CriptographyHash } from '../../../protocols'

export class DbUserStore implements UserStore {
  constructor(
    private readonly storeRepository: UserStoreRepository,
    private readonly findByEmailRepository: UserFindByEmailRepository,
    private readonly criptography: CriptographyHash
  ) {
    this.storeRepository = storeRepository
    this.findByEmailRepository = findByEmailRepository
    this.criptography = criptography
  }

  async store(values: UserStore.Params): Promise<UserStore.Result> {
    const { name, email, password } = values
    const user = await this.findByEmailRepository.findByEmail(email)
    if (!user) {
      const data = { name, email, password: await this.criptography.hash(password) }
      return await this.storeRepository.store(data)
    }
    return null
  }
}
