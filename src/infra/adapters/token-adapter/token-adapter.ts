import jwt from 'jsonwebtoken'
import { TokenEncrypt, UserFindByEmailRepository } from '../../../data/protocols'

export class TokenAdapter implements TokenEncrypt {
  constructor(private readonly secret: string) {
    this.secret = secret
  }

  async encrypt(values: UserFindByEmailRepository.Result): Promise<string> {
    const accessToken = await jwt.sign(values, this.secret)
    return accessToken
  }
}
