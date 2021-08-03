import { UserForgotPassword } from '../../../../domain/usecases'
import { PasswordResetStoreRepository, UserFindByEmailRepository, UuidGenerator } from '../../../protocols'

export class DbUserForgotPassword implements UserForgotPassword {
  constructor(
    private readonly userRepository: UserFindByEmailRepository,
    private readonly passwordResetRepository: PasswordResetStoreRepository,
    private readonly uuid: UuidGenerator
  ) {
    this.userRepository = userRepository
    this.passwordResetRepository = passwordResetRepository
    this.uuid = uuid
  }

  async forgotPassword(email: string): Promise<UserForgotPassword.Result> {
    const user = await this.userRepository.findByEmail(email)
    const uuid = this.uuid.generator()
    if (user) {
      await this.passwordResetRepository.store({ uuid, email })
      return { email, uuid }
    }
    return null
  }
}
