import bcrypt from 'bcrypt'
import { CriptographyHash, CriptographyCompare } from '../../../data/protocols/adapters'

export class CriptographyAdapter implements CriptographyHash, CriptographyCompare {
  constructor(private readonly salt: number) {
    this.salt = salt
  }

  async hash(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async compare(value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }
}
