export interface UserToken {
  id: number
  name: string
  email: string
}

export interface TokenEncrypt {
  encrypt(values: UserToken): Promise<string>
}

export interface TokenDecrypt {
  decrypt(token: string): Promise<boolean>
}