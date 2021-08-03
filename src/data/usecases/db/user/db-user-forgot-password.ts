import { UserForgotPassword } from '../../../../domain/usecases'
import { PasswordResetStoreRepository, UserFindByEmailRepository, UuidGenerator } from '../../../protocols'

export class DbUserForgotPassword implements UserForgotPassword {
  constructor(
    private readonly userModel: UserFindByEmailRepository,
    private readonly passwordResetModel: PasswordResetStoreRepository,
    private readonly uuid: UuidGenerator
  ) {
    this.userModel = userModel
    this.passwordResetModel = passwordResetModel
    this.uuid = uuid
  }

  async forgotPassword(email: string): Promise<UserForgotPassword.Result> {
    const user = await this.userModel.findByEmail(email)
    const uuid = this.uuid.generator()
    if (user) {
      await this.passwordResetModel.store({ uuid, email })
      return { email, uuid }
    }
    return null
  }
}
