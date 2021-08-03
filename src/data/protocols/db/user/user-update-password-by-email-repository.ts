export interface UserUpdatePasswordByEmailRepository {
  updatePasswordByEmail(email: string, password: string): Promise<number>
}
