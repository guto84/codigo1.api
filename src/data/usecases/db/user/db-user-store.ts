import { UserModel } from '../../../../domain/models'
import { UserStore, UserStoreModel } from '../../../../domain/usecases/user'
import { CriptographyHash } from '../../../protocols/adapters'
import { UserStoreRepository, UserFindByEmailRepository } from '../../../protocols/db/user'

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

  async store(values: UserStoreModel): Promise<UserModel> {
    const { name, email, password } = values
    const user = await this.findByEmailRepository.findByEmail(email)
    if (!user) {
      const data = { name, email, password: await this.criptography.hash(password) }
      return await this.storeRepository.store(data)
    }
    return null
  }
}
