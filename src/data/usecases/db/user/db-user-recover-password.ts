import { UserRecoverPassword } from '../../../../domain/usecases'
import { CriptographyHash, PasswordResetFindByUuidRepository, UserUpdatePasswordByEmailRepository } from '../../../protocols'

export class DbUserRecoverPassword implements UserRecoverPassword {
  constructor(
    private readonly userRepository: UserUpdatePasswordByEmailRepository,
    private readonly passwordResetRepository: PasswordResetFindByUuidRepository,
    private readonly criptography: CriptographyHash
  ) {
    this.userRepository = userRepository
    this.passwordResetRepository = passwordResetRepository
    this.criptography = criptography
  }

  async recoverPassword(values: UserRecoverPassword.Params): Promise<number> {
    const { uuid, password } = values
    const passwordReset = await this.passwordResetRepository.findByUuid(uuid)
    if (passwordReset) {
      const newPassword = await this.criptography.hash(password)
      return await this.userRepository.updatePasswordByEmail(passwordReset.email, newPassword)
    }
    return null
  }
}
